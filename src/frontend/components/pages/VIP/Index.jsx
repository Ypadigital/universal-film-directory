import React from "react";
import { Link } from "react-router-dom";

const VIP = () => {
  return (
    <>
      {/* Breadcrumb */}
      {/* Home Banner */}
      <section className="section vip-banner row-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-5">
              <div className="vip-content">
                <h1>
                  Star Space <br />
                  <span className="orange-text">360</span>
                </h1>
                <p>
                  Contact award wining <br /> movie celebrities from all <br />{" "}
                  over the world
                </p>
                <Link to="/request-access" className="btn mt-4 btn-primary">
                  Request Access
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-lg-5"></div>
          </div>
        </div>
      </section>
      {/* /Breadcrumb */}
      {/* Page Content */}
      {/* <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Blank Page</h5>
            </div>
          </div>
        </div>
      </div> */}
      {/* /Page Content */}
    </>
  );
};
export default VIP;
