import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/appContext";

export default function useCanCallWeb3Method() {
  const { wallet, network } = useAppContext();
  
  const chainId = process.env.REACT_APP_CHAIN_ID || "0x13881";
  const [canRunWeb3, setcanRunWeb3] = useState(false);
  const cannotCallWeb3Error =
    "Please connect your wallet and switch to Mumbai Testnet!";

  useEffect(() => {
    if (wallet && network === chainId) setcanRunWeb3(true);
    else setcanRunWeb3(false);
  }, [wallet, network, chainId]);

  return { canRunWeb3, cannotCallWeb3Error };
}
