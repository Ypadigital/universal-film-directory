import React, { useState } from "react";
import styles from "./wallet-button.module.css";

import { useShortAddress } from "../../hooks/useShortAddress";
import { useAppContext } from "../../contexts/appContext";
import ArrowDown from "../Icons/ArrowDown";
import { Button } from "../Common/Button";
import toast from "../../utils/toast";

function DisconnectWalletButton() {
  const { wallet, network, handleWalletDisconnect } = useAppContext();
  const isWrongNetwork = network !== process.env.REACT_APP_CHAIN_ID;

  const shortAddress = useShortAddress(wallet);

  const [arrowDown, setArrowDown] = useState(true);
  let containerClasses = `${styles["container"]} `;
  if (!arrowDown) containerClasses += `${styles["active"]}`;

  const handleDisconnect = () => {
    handleWalletDisconnect();
  };

  return (
    <>
      {!!isWrongNetwork ? (
        <Button
          onClick={() => {
            toast.error("Please switch to Mumbai Testnet");
          }}
          className="btn-red"
        >
          Wrong Network
        </Button>
      ) : (
        <div
          onClick={() => setArrowDown(!arrowDown)}
          className={`${containerClasses}`}
        >
          <div className={`${styles["wallet-address-box"]} `}>
            <span className={`${styles["address"]} mr-3`}>{shortAddress}</span>
            <ArrowDown className={`${styles["arrow-down-icon"]}`} />
          </div>
          <button
            onClick={handleDisconnect}
            className={`${styles["disconnect-btn"]} btn shadow-l`}
          >
            <span>Disconnect</span>
          </button>
        </div>
      )}
    </>
  );
}

export { DisconnectWalletButton };
