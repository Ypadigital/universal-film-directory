import React from "react";

import { Button } from "../Common/Button";
import styles from "./connect-button.module.css";
import { useAppContext } from "../../contexts/appContext";
import WalletIcon from "../Icons/WalletIcon";
import { hasEthereum } from "../../services/web3Service";

function ConnectButton() {
  const loading = false;
  const { handleWalletConnect, network } = useAppContext();
  const hasMetaMask = hasEthereum();
  const isWrongNetwork = network !== process.env.REACT_APP_CHAIN_ID;
  console.log({ isWrongNetwork, network, chainId: process.env.REACT_APP_CHAIN_ID });
  async function connect() {
    const connectionStatus = await handleWalletConnect();
    if (!connectionStatus) return;
  }

  return (
    <div>
      {!hasMetaMask && (
        <div className="">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://metamask.io/download"
          >
            <Button>Get Meta mask</Button>
          </a>
        </div>
      )}
      {hasMetaMask && (
        <Button onClick={connect} disabled={loading}>
          <span className="d-none d-md-block">Connect Wallet</span>
          <WalletIcon className={`${styles["wallet-icon"]} d-md-none`} />
        </Button>
      )}
    </div>
  );
}

export { ConnectButton };
