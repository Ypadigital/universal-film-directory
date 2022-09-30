import React from "react";

function DeleteAccountModal() {
  return (
    <div className="modal fade custom-modal" id="delete-acc">
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-body del-modal">
            <form>
              <div className="text-center pt-0 mb-5">
                <i className="fas fa-exclamation-triangle fa-3x" />
                <h3>Are you sure? Want to delete Account</h3>
              </div>
              <div className="submit-section text-center">
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-primary black-btn click-btn"
                >
                  Cancel
                </button>
                &nbsp;
                <button type="submit" className="btn btn-primary click-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountModal;
