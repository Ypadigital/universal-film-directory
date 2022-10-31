import React from "react";

function HireModal() {
  return (
    <div className="modal fade custom-modal" id="hire">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-modal">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="text-center  pt-0 mb-4">
              <h5 className="modal-title">
                Discuss your project with Minah Mmassy
              </h5>
            </div>
            <form>
              <div className="modal-info">
                <div className="row">
                  <div className="col-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="First name & Lastname"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="name"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-12 col-md-4 pr-0">
                        <label className="file-upload">
                          Add Attachment <input type="file" />
                        </label>
                      </div>
                      <div className="col-12 col-md-8">
                        <p className="mb-1">
                          Allowed file types: zip, pdf, png, jpg
                        </p>
                        <p>Max file size: 50 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block submit-btn"
                >
                  Hire Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireModal;
