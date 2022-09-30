import React from "react";

function EducationModal() {
  return (
    <div className="modal fade" id="education">
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Educational Details</h4>
            <span className="modal-close">
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle orange-text" />
              </a>
            </span>
          </div>
          <div className="modal-body">
            <div>
              <div className="modal-info">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label>Level</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-12">
                        <label>School Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Start year</label>
                        <input
                          type="date"
                          className="form-control datetimepicker"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>End year</label>
                        <input
                          type="date"
                          className="form-control datetimepicker"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label>Summary</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section text-end">
                <button type="submit" className="btn btn-primary submit-btn">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationModal;
