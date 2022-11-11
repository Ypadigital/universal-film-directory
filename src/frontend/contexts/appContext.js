import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import {
  connectToMetaMask,
  listenToAccountChanges,
  hasEthereum,
  unmountEthListeners,
  listenToNetworkChanges,
  getCurrentNetwork,
} from "../services/web3service";
import { NotificationManager as toast } from "react-notifications";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
  const [wallet, setWallet] = useState("");
  const [network, setNetwork] = useState(process.env.REACT_APP_CHAIN_ID);
  const [hasMetaMask, setHasMetaMask] = useState(true);
  console.log(process.env.REACT_APP_CHAIN_ID)
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

  const handleWalletDisconnect = () => {
    setWallet("");
    localStorage.removeItem("wallet-connection");
  };

  const handleAccountChanged = useCallback(
    () => (address) => {
      if (!address) return handleWalletDisconnect();
      setWallet(address);
    },
    []
  );

  const handleNetworkChanged = useCallback(
    () => async (chainId) => {
      if (!wallet) return handleWalletDisconnect();
      const network = await getCurrentNetwork();
      console.log({ network, chainId });
      setNetwork(chainId);
    },
    [wallet]
  );

  useEffect(() => {
    if (!isInitiallyFetched) return;

    if (!hasEthereum()) return;
    (async () => {
      const network = await getCurrentNetwork();
      setNetwork(network);
    })();
    window.ethereum.on("accountsChanged", async (accounts) => {
      handleAccountChanged(accounts[0]);
      console.log("Account Changed", accounts[0]);
    });
    window.ethereum.on("chainChanged", async (chainId) => {
      handleNetworkChanged(chainId);
      console.log({ chainId });
    });
    return () => unmountEthListeners();
  }, [handleAccountChanged, handleNetworkChanged, isInitiallyFetched]);

  useEffect(() => {
    if (isInitiallyFetched) return;
    if (!hasEthereum()) return setHasMetaMask(false);

    const isInjected = localStorage.getItem("wallet-connection");
    if (!isInjected) return setIsInitiallyFetched(true);
    handleWalletConnect();
    setIsInitiallyFetched(true);
    return;
  }, [handleWalletConnect, isInitiallyFetched]);

  return (
    <AppContext.Provider
      value={{
        network,
        wallet,
        setWallet,
        handleWalletConnect,
        handleWalletDisconnect,
        hasMetaMask,
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
