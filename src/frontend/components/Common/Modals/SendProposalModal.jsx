import React from "react";

function SendProposalModal() {
  return (
    <div className="modal fade" id="sendproposal">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">SEND PROPOSALS</h4>
            <span className="modal-close">
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle orange-text" />
              </a>
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-info">
              <form>
                <div className="feedback-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Price"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Estimated Hours"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        rows={5}
                        className="form-control"
                        placeholder="Cover Letter"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="proposal-features">
                  <div className="proposal-widget proposal-success">
                    <label className="custom_check">
                      <input type="checkbox" name="select_time" />
                      <span className="checkmark" />
                      <span className="proposal-text">
                        Stick this Proposal to the Top
                      </span>
                      <span className="proposal-text float-end">$12.00</span>
                    </label>
                    <p>
                      The sticky proposal will always be displayed on top of all
                      the proposals.
                    </p>
                  </div>
                  <div className="proposal-widget proposal-light">
                    <label className="custom_check">
                      <input type="checkbox" name="select_time" />
                      <span className="checkmark" />
                      <span className="proposal-text">
                        $ Make Sealed Proposal
                      </span>
                      <span className="proposal-text float-end">$7.00</span>
                    </label>
                    <p>
                      The sealed proposal will be sent to the project author
                      only it will not be visible publically.
                    </p>
                  </div>
                  <div className="proposal-widget proposal-danger">
                    <label className="custom_check">
                      <input type="checkbox" name="select_time" />
                      <span className="checkmark" />
                      <span className="proposal-text">
                        $ Make Sealed Proposal
                      </span>
                      <span className="proposal-text float-end">$15.00</span>
                    </label>
                    <p>
                      The featured proposal will have a distinctive color and
                      popped up between other proposals to get the author's
                      attention.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 submit-section">
                    <label className="custom_check">
                      <input type="checkbox" name="select_time" />
                      <span className="checkmark" /> I agree to the Terms And
                      Conditions
                    </label>
                  </div>
                  <div className="col-md-12 submit-section text-end">
                    <button
                      className="btn btn-primary submit-btn"
                      type="submit"
                    >
                      SUBMIT PROPOSAL
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendProposalModal;
