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
      {/* Page Content */}
      <SideBar freelancer={true}>
        <nav className="user-tabs mb-4">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link className="nav-link active" to="/freelancer-withdraw-money">
                Withdraw Funds
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-invoices">
                {" "}
                Invoices
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-transaction-history">
                {" "}
                Transaction History
              </Link>
            </li>
          </ul>
        </nav>
        <div className="row">
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
          <div className="col-md-12">
            <div className="card">
              <div className="payment-list wallet card-body">
                <h3>Payment Infomation</h3>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="card_number">Card Number</label>
                      <input
                        className="form-control"
                        id="card_number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="first_name">Bank Name</label>
                      <input
                        className="form-control"
                        id="first_name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="last_name">Display Name</label>
                      <input
                        className="form-control"
                        id="last_name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="expiry_on">Amount</label>
                      <input
                        className="form-control"
                        id="expiry_on"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 btn-pad">
                    <button className="btn-primary click-btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default Withdrawmoney;
