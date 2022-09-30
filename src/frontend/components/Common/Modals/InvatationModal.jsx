import React from "react";

function InvatationModal() {
  return (
    <div className="modal fade" id="bookmark">
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">HIRE A FREELANCER</h4>
            <span className="modal-close">
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle orange-text" />
              </a>
            </span>
          </div>
          <div className="modal-body">
            <form action="#">
              <div className="modal-info">
                <div className="row">
                  <div className="col-md-12">
                    <div className="average-bids">
                      <p>
                        Contact{" "}
                        <span className="text-highlight">John Doe </span> about
                        your Project
                      </p>
                    </div>
                    <div className="form-group">
                      <label>Invite title</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Send a private message</label>
                      <textarea
                        className="form-control"
                        rows={5}
                        defaultValue={
                          "Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat."
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Hire for</label>
                      <div className="radio">
                        <label className="custom_radio">
                          <input
                            type="radio"
                            defaultValue="fix"
                            name="fix"
                            defaultChecked
                          />
                          <span className="checkmark" /> Fixed Price
                        </label>
                        <label className="custom_radio">
                          <input type="radio" defaultValue="fix" name="fix" />
                          <span className="checkmark" /> Hourly Rate
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Budget</label>
                      <div className="form-row">
                        <div className="col-6">
                          <div className="input-group form-inline">
                            <div className="input-group-prepend bg-pink">
                              <span
                                className="input-group-text"
                                id="basic-addon"
                              >
                                $
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control me-1"
                              placeholder={20.0}
                            />{" "}
                            <label>/ hr</label>
                          </div>
                        </div>
                        <div className="col-6">
                          <select className="form-control select">
                            <option value={0}>USD</option>
                            <option value={0}>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Project</label>
                      <select className="form-control select">
                        <option value={0}>
                          3D Renders and Amazon Product Store images/Video
                        </option>
                        <option value={0}>
                          3D Renders and Amazon Product Store Video
                        </option>
                        <option value={0}>
                          3D Renders and Amazon Product Store images
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section text-end">
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvatationModal;
