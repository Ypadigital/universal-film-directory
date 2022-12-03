import React, { useState } from "react";

import { Button } from "../Common/Button";
import styles from "./connect-button.module.css";
import { useAppContext } from "../../contexts/appContext";
import WalletIcon from "../Icons/WalletIcon";
import { hasEthereum } from "../../services/web3service";
import { toast } from "react-toastify";

function ConnectButton() {
  const [loading, setloading] = useState(false);
  const { wallet, handleWalletConnect } = useAppContext();
  const hasMetaMask = hasEthereum();

  async function connect() {
    setloading(true);
    await handleWalletConnect();
    setloading(false);
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
      {hasMetaMask && !!!wallet && (
        <Button onClick={() => connect()} disabled={loading}>
          <span className="d-none d-md-block">Connect Wallet</span>
          <WalletIcon className={`${styles["wallet-icon"]} d-md-none`} />
        </Button>
      )}
    </div>
  );
}

export { ConnectButton };
