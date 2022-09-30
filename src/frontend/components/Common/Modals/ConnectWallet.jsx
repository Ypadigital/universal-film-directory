import React from "react";
import { Developer_01, wallet1, wallet2 } from "../../imagepath";

function ConnectWallet() {
  return (
    <div className="modal fade" id="connectwallet">
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Connect Wallet</h5>
            <span className="modal-close">
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle orange-text" />
              </a>
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-info">
              <form>
                <div className="feedback-form">
                  <button className="connect-button">
                    <img src={wallet1} alt="wallet" />
                    <span>Metamask</span>
                  </button>
                  <button className="connect-button">
                    <img src={wallet2} alt="wallet" />
                    <span>Wallet Connect</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
