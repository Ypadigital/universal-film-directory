import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function OTPcode() {
  useEffect(() => {
    document.body.className = "chat-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <section className="section about h-100">
      <div className="container">
        <div className="row justify-content-center my-5 align-items-center">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="about-content">
              <h2>
                Verify Your <span className="orange-text">Email Address</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                modi, saepe hic esse maxime quasi, sapiente ex debitis quis
                dolorum unde, neque quibusdam eveniet nobis enim porro
                repudiandae nesciunt quidem.
              </p>

              <Link to="/buytoken" className="btn btn-primary w-100 py-3">
                Create Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OTPcode;
