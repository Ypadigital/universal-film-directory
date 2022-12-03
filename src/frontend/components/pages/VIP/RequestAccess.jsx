import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Common/Breadcrumb";
import VipModal from "../../Common/Modals/VipModal";

function RequestAccess() {
  return (
    <>
      <Breadcrumb title="Request Access " />
      <div className="content">
        <div className="container">
          <form>
            <div className="card">
              <div className="pro-head">
                <h3 className="pro-title without-border mb-0">
                  Personal Information
                </h3>
              </div>
              <div className="pro-body">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Full Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Phone</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Company Name</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Company Location</label>
                    <select name="price" className="form-control select">
                      <option value={0}>Tanzania</option>
                      <option value={1}>Kenya</option>
                      <option value={2}>Uganda</option>
                      <option value={3}>Nigeria</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="pro-head">
                <h3 className="pro-title without-border mb-0">
                  Basic Information
                </h3>
              </div>
              <div className="row pro-body">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Upload Certificate of incoporation</label>
                    <div className="uplod">
                      <label className="file-upload image-upbtn">
                        Select Document <input type="file" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Upload business profile </label>
                    <div className="uplod">
                      <label className="file-upload image-upbtn">
                        Select Document <input type="file" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Upload Awards Certificate</label>
                    <div className="uplod">
                      <label className="file-upload image-upbtn">
                        Select Document <input type="file" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label>Movie industry/Studio under</label>
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
                    <label htmlFor="comment">Business Address</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      id="comment"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="comment">
                      Motivation/ Statement of Purpose
                    </label>
                    <textarea
                      className="form-control"
                      rows={5}
                      id="comment"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="col-md-12 text-end">
                  <a
                    data-bs-toggle="modal"
                    href="#vip"
                    className="btn-primary click-btn"
                  >
                    Send Request
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* modal */}
      <VipModal />
    </>
  );
}

export default RequestAccess;
