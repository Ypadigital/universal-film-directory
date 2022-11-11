import { useEffect, useState } from "react";
import { useAppContext } from "../contexts/appContext";

export default function useCanCallWeb3Method() {
  const { wallet, network } = useAppContext();

  const chainId = process.env.REACT_APP_CHAIN_ID || "0x13881";
  console.log(chainId, network);
  const [canRunWeb3, setcanRunWeb3] = useState(false);
  const cannotCallWeb3Error =
    "Please connect your wallet and switch to Mumbai Testnet!";

  useEffect(() => {
    console.log(wallet, network);
    // if (wallet && network === chainId) setcanRunWeb3(true);
    // else setcanRunWeb3(false);
  }, [wallet, network]);

  return { canRunWeb3, cannotCallWeb3Error };
}
