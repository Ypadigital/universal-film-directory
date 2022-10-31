import React from "react";
import { vip_img1, Flags_pl } from "../../../imagepath";

function UserInfo() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="profile">
          <div className="profile-box">
            <div className="provider-widget">
              <div className="pro-info-left">
                <div className="provider-img">
                  <img src={vip_img1} alt="User" />
                </div>
                <div className="profile-info">
                  <h2 className="profile-title">Emilia Clarke</h2>
                  <p className="profile-position">Actor</p>

                  <ul className="profile-preword">
                    <li>
                      <img src={Flags_pl} alt="" height={16} /> New York, United
                      States
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
