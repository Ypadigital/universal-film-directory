import React from "react";
import { Link } from "react-router-dom";
import { confirm } from "../../imagepath";

function AcceptProposal() {
  return (
    <div className="modal fade" id="acceptproposal">
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
                  Project <span className="orange-text">Accepted!</span>
                </h2>
                <p>
                  You have accepted the project. You can now start working on
                  the project.
                </p>
                <a
                  href="#"
                  data-bs-dismiss="modal"
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

export default AcceptProposal;
