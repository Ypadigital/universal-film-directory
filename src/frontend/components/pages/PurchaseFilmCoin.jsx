import React from "react";
import { Link } from "react-router-dom";
import Breadcrub from "../Common/Breadcrub";

function PurchaseFilmCoin() {
  return (
    <>
      <Breadcrub title="Purchase FilmCoin" />
      <div className="content">
        <div className="container">
          <div className="row col-12">
            <div className="col-lg-4">
              <div className="package-detail">
                <h4>Basic Plan</h4>
                <p>Go Pro, Best for the individuals</p>
                <h3 className="package-price">$19.00</h3>
                <div className="package-feature">
                  <ul>
                    <li>12 Project Credits</li>
                    <li>10 Allowed Services</li>
                    <li>20 Days visibility</li>
                    <li>5 Featured Services</li>
                    <li>20 Days visibility</li>
                    <li>30 Days Package Expiry</li>
                    <li className="non-check">Profile Featured</li>
                  </ul>
                </div>
                <Link
                  to="/onbord"
                  className="btn btn-primary price-btn btn-block"
                >
                  Select Plan
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="package-detail">
                <h4>Business </h4>
                <p>Highest selling package features</p>
                <h3 className="package-price">$29.00</h3>
                <div className="package-feature">
                  <ul>
                    <li>15 Project Credits</li>
                    <li>12 Allowed Services</li>
                    <li>25 Days visibility</li>
                    <li>10 Featured Services</li>
                    <li>30 Days visibility</li>
                    <li>40 Days Package Expiry</li>
                    <li>Profile Featured</li>
                  </ul>
                </div>
                <Link
                  to="/onbord"
                  className="btn btn-primary price-btn btn-block"
                >
                  Select Plan
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="package-detail">
                <h4>The Unlimita </h4>
                <p>Drive crazy, unlimited on the go</p>
                <h3 className="package-price">$79.00</h3>
                <div className="package-feature">
                  <ul>
                    <li>Unlimited Project Credits</li>
                    <li>Unlimited Services</li>
                    <li>Services Never Expire</li>
                    <li>20 Featured Services</li>
                    <li>Services Never Expire</li>
                    <li>Package Never Expire</li>
                    <li>Profile Featured</li>
                  </ul>
                </div>
                <Link
                  to="/onbord"
                  className="btn btn-primary price-btn btn-block"
                >
                  Select Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseFilmCoin;
