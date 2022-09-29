import React from "react";

function FavoriteModal({ freelancer }) {
  return (
    <div className="modal fade" id="rating">
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header d-block b-0 pb-0">
            <span className="modal-close float-end">
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle orange-text" />
              </a>
            </span>
          </div>
          <div className="modal-body">
            <form>
              <div className="modal-info">
                <div className="text-center pt-0 mb-5">
                  <h3>
                    Please login to Favourite{" "}
                    {freelancer ? "Freelancer" : "Project"}
                  </h3>
                </div>
                <div className="submit-section text-center">
                  <button
                    data-bs-dismiss="modal"
                    type="button"
                    className="btn btn-primary click-btn"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteModal;
