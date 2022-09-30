import React from "react";
import { Link } from "react-router-dom";
import Breadcrub from "../Common/Breadcrub";

function VerifyIdentit() {
  return (
    <>
      <Breadcrub title="Verify Identity" />
      <div className="content">
        <div className="container">
          <div className="card">
            <div className="payment-list wallet card-body">
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Company You working on</label>
                    <select className="form-control select">
                      <option value={0}>Disney Pictures</option>
                      <option value={1}>Paramount Pictures</option>
                      <option value={1}>20th Century Studios</option>
                      <option value={1}>Universal Pictures.</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="last_name">You Working as</label>
                      <input
                        className="form-control"
                        id="last_name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Location</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Gender</label>
                    <select className="form-control select">
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="card_number">
                        CNIC / Passport / NIN / SSN
                      </label>
                      <input
                        className="form-control"
                        id="card_number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Upload Document</label>
                      <div className="uplod">
                        <label className="file-upload image-upbtn">
                          Select Document <input type="file" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="comment">Address</label>
                      <textarea
                        className="form-control"
                        rows={5}
                        id="comment"
                        defaultValue={""}
                      />
                      <p className="mt-2">
                        Your account information should match with the document
                        that you are providing.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 text-end">
                    <Link to="/dashboard" className="btn-primary click-btn">
                      Submit verification
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyIdentit;
