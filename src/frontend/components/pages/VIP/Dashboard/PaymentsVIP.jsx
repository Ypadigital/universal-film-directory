import React, { useEffect } from "react";
import VipSideBar from "../../../Common/VipSideBar";

const VipPayments = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <VipSideBar>
        <div className="row">
          <div className="col-md-6 mb-2">
            <div className="card">
              <div className="payment-list wallet card-body">
                <h3>Request Payment</h3>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="card_number">Card Number</label>
                      <input
                        className="form-control"
                        id="card_number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="first_name">Bank Name</label>
                      <input
                        className="form-control"
                        id="first_name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="last_name">Display Name</label>
                      <input
                        className="form-control"
                        id="last_name"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="payment-process card-body">
                <ul>
                  <li className="pt-0">
                    <label className="total">Deposit Currency</label>
                    <div className="sort-by sort-show">
                      <span className="sortby-fliter">
                        <select className="select">
                          <option className="sorting">Dollar</option>
                          <option className="sorting">Euro</option>
                          <option className="sorting">Yen</option>
                        </select>
                      </span>
                    </div>
                  </li>
                  <li>
                    <label className="total">Deposit Amount</label>
                    <div className="input-group dep-amt mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          $
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={2100}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </li>
                  <li className="tot-border">
                    <label className="total">Processing Fee</label>
                    <label className="price">$63.30</label>
                  </li>
                  <li>
                    <label className="total">Total</label>
                    <label className="price">$2,163.30</label>
                  </li>
                </ul>
                <div className="mt-3">
                  <a href="#" className="btn pay-btn btn-block" tabIndex={0}>
                    {" "}
                    Request Payment
                  </a>
                  <p className="mb-0">
                    You agree to authorize the use of your card for this deposit
                    and future payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* wallet */}
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
        </div>
      </VipSideBar>
      {/* /Page Content */}
    </>
  );
};
export default VipPayments;
