import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Common/SideBar";

const Withdrawmoney = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      <>
        {/* Page Content */}
        <SideBar freelancer={false}>
          <div className="row">
            <div className="col-md-12">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/wallet">
                      Wallet
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/transaction-history">
                      Transaction History
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-6 mb-2">
              <div className="card">
                <div className="wallet-detail card-body">
                  <div className="wallet-title pt-0 ps-0">
                    <h3 className="mb-0">Wallet</h3>
                  </div>
                  <div className="wallet-bal">
                    <span className="dol-circle">
                      <i className="fa fa-dollar-sign" aria-hidden="true" />
                    </span>
                    <div className="wallet-amt">
                      <p>Total Balance</p>
                      <h3 className="mb-0">$250.60 </h3>
                    </div>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-pay">
                      <p>Platform Fee</p>
                      <h3 className="mb-0">$500.00</h3>
                    </div>
                    <div className="wallet-pay">
                      <p>Available Amount</p>
                      <h3 className="mb-0">$35.00</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Wallet */}
          </div>
        </SideBar>
        {/* /Page Content */}
      </>
    </>
  );
};
export default Withdrawmoney;
