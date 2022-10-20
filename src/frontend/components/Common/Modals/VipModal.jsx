import React from "react";
import { confirm } from "../../imagepath";

function VipModal() {
  return (
    <div className="modal fade" id="vip">
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-close">
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle orange-text" />
              </a>
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-info">
              <div className="about-content text-center about-content2 d-block align-items-center justify-content-center">
                <img src={confirm} alt="banner" className="img-fluid" />
                <h2>
                  <span className="orange-text">Congratulations!</span>
                </h2>
                <p>
                  Congratulations your request has been sent you will be
                  contacted as soon as possible
                </p>
                <a
                  href="/vip-list"
                  className="btn btn-primary py-2 btn-block submit-btn"
                >
                  I Undestand
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VipModal;
