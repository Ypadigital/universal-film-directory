import React from "react";
import { ConnectButton } from "./ConnectButton";
import { DisconnectWalletButton } from "./DisconnectWallet";
import { useAppContext } from "../../contexts/appContext";

function WalletButton() {
  const { wallet } = useAppContext();

  return wallet ? <DisconnectWalletButton /> : <ConnectButton />;
}

export { WalletButton };
