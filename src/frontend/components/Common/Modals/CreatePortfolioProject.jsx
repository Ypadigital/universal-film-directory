import React from "react";
import { Link } from "react-router-dom";

function CreatePortfolioProject() {
  return (
    <div className="modal fade" id="portfolio">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add Portfolio</h4>
            <span className="modal-close">
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle orange-text" />
              </a>
            </span>
          </div>
          <div className="modal-body">
            <div className="port-title">
              <h3>Simple &amp; Best Way To Showcase Your Work</h3>
            </div>
            <form>
              <div className="modal-info">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Portfolio Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Link</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Http://www.example.com//john..."
                      />
                    </div>
                    <label className="br-0 file-upload image-upbtn">
                      upload Files <input type="file" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="submit-section text-right">
                <a
                  data-bs-dismiss="modal"
                  className="btn btn-primary black-btn submit-btn"
                >
                  Cancel
                </a>
                <Link
                  to="/freelancer-portfolio"
                  className="btn btn-primary submit-btn"
                >
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePortfolioProject;
