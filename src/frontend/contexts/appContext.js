import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import {
  connectToMetaMask,
  hasEthereum,
  unmountEthListeners,
  getCurrentNetwork,
} from "../services/web3service";
import { getAuthToken, setAuthToken } from "../utils/helpers";
import toast from "../utils/toast";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [authToken, setAuthToken] = useLocalStorage("ufd-auth-token", null);

  const [isLoggedIn, handleSetLogin] = useState(authToken ? true : false);
  const router = useHistory();

  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
  const [wallet, setWallet] = useState("");
  const [network, setNetwork] = useState(process.env.REACT_APP_CHAIN_ID);
  const [hasMetaMask, setHasMetaMask] = useState(true);

  const handleWalletConnect = useCallback(() => {
    (async () => {
      const connection = await connectToMetaMask();
      if (!connection.length) {
        toast.error("Connection was Unsuccessful");
        return null;
      }

      setWallet(connection[0]);
      localStorage.setItem("wallet-connection", true);

      return connection[0];
    })();
    return;
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("ufd-auth-token");
    handleSetLogin(false);
    router.push("/");
  };
  const handleWalletDisconnect = () => {
    localStorage.removeItem("wallet-connection", false);
    setWallet("");
    handleLogout();
  };

  useEffect(() => {
    if (isInitiallyFetched) return;
    if (!hasEthereum()) return setHasMetaMask(false);

    const isInjected = localStorage.getItem("wallet-connection");
    if (!isInjected) return setIsInitiallyFetched(true);
    handleWalletConnect();
    setIsInitiallyFetched(true);
    return;
  }, [handleWalletConnect, isInitiallyFetched]);

  useEffect(() => {
    if (!isInitiallyFetched) return;

    if (!hasEthereum()) return;
    (async () => {
      const network = await getCurrentNetwork();
      setNetwork(network.chainId);
    })();
  }, [isInitiallyFetched]);

  useEffect(() => {
    window.ethereum.on("accountsChanged", async (accounts) => {
      console.log(accounts);
      if (!accounts[0]) handleWalletDisconnect();
      setWallet(accounts[0]);
      handleLogout();
    });
    window.ethereum.on("chainChanged", async (chainId) => {
      setNetwork(chainId);
    });
    return () => unmountEthListeners();
  }, [router]);

  return (
    <AppContext.Provider
      value={{
        network,
        wallet,
        setWallet,
        handleWalletConnect,
        handleWalletDisconnect,
        hasMetaMask,
        isLoggedIn,
        handleSetLogin,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) throw new Error("useApp must be used inside a `AppProvider`");

  return context;
}
