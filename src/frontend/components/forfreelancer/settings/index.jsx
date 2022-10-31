import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Common/SideBar";
import { Developer_01 } from "../../imagepath";
import ReactSummernote from "react-summernote";
import TableEdSkill from "../../Common/TableEdSkill";
const FreelancerSettings = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={true}>
        <div className="pro-pos">
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/freelancer-profile-settings"
                >
                  Profile Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/freelancer-change-password">
                  Change Password
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/freelancer-delete-account">
                  Delete Account
                </Link>
              </li>
            </ul>
          </nav>
          <div className="setting-content">
            <form>
              <div className="card">
                <div className="pro-head">
                  <h3 className="pro-title without-border mb-0">
                    Profile Basics{" "}
                  </h3>
                </div>
                <div className="pro-body">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Contact Number</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Tell the world what you do</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Service you offer</label>
                      <select name="price" className="form-control select">
                        <option value={0}>Photographer</option>
                        <option value={1}>Film Maker</option>
                        <option value={1}>Film Director</option>
                        <option value={1}>Actor</option>
                        <option value={1}>Animater</option>
                      </select>
                    </div>

                    <div className="form-group col-md-6">
                      <label>Gender</label>
                      <select name="price" className="form-control select">
                        <option value={0}>Male</option>
                        <option value={1}>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row pro-pad pt-0">
                    <div className="form-group col-md-6 pro-pic">
                      <label>Profile Picture</label>
                      <div className="d-flex align-items-center">
                        <div className="upload-images">
                          <img src={Developer_01} alt="user" />
                          <div className="btn btn-icon btn-danger btn-sm">
                            <i className="far fa-trash-alt" />
                          </div>
                        </div>
                        <label className="file-upload image-upbtn ms-3">
                          Change Image <input type="file" />
                        </label>
                      </div>
                      <p>Image size 300*300</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="pro-head">
                  <h3 className="pro-title without-border mb-0">Location</h3>
                </div>
                <div className="pro-body">
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label>Address</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>State</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Zipcode</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Country</label>
                      <select name="price" className="form-control select">
                        <option value={0}>India</option>
                        <option value={1}>China</option>
                        <option value={2}>Japan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-12 col-xl-6">
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">Skills</h3>
                      <a href="#" className="btn fund-btn add-award">
                        Add More
                      </a>
                    </div>
                    <div className="pro-body  lang-info">
                      <div className="form-row align-items-center lang-cont">
                        <div className="form-group col-md-7">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Photographer"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={"100%"}
                          />
                        </div>
                        <div className="form-group col-md-2">
                          <a href="#" className="btn trash-icon">
                            <i className="far fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="form-row align-items-center lang-cont">
                        <div className="form-group col-md-7">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Fashion Designer"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={"30%"}
                          />
                        </div>
                        <div className="form-group col-md-2">
                          <a href="#" className="btn trash-icon">
                            <i className="far fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="form-row align-items-center lang-cont">
                        <div className="form-group col-md-7">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Film Maker"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={"90%"}
                          />
                        </div>
                        <div className="form-group col-md-2">
                          <a href="#" className="btn trash-icon">
                            <i className="far fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-xl-6">
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        Languages
                      </h3>
                      <a href="#" className="btn fund-btn add-lang">
                        Add More
                      </a>
                    </div>
                    <div className="pro-body  lang-info">
                      <div className="form-row align-items-center lang-cont">
                        <div className="form-group col-md-7">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="English"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={"76%"}
                          />
                        </div>
                        <div className="form-group col-md-2">
                          <a href="#" className="btn trash-icon">
                            <i className="far fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="form-row align-items-center lang-cont">
                        <div className="form-group col-md-7">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Russian"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={"90%"}
                          />
                        </div>
                        <div className="form-group col-md-2">
                          <a href="#" className="btn trash-icon">
                            <i className="far fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="form-row align-items-center lang-cont">
                        <div className="form-group col-md-7">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Germany"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={"22%"}
                          />
                        </div>
                        <div className="form-group col-md-2">
                          <a href="#" className="btn trash-icon">
                            <i className="far fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* education */}
              <TableEdSkill title="Education" main={true} />
              <TableEdSkill title="Experiance" main={false} />
              {/* Shot desc */}
              <div className="card">
                <div className="pro-head">
                  <h3 className="pro-title without-border mb-0">
                    Short cover letter
                  </h3>
                </div>
                <div className="pro-body">
                  <div className="row">
                    <div className="form-group col-md-12">
                      <ReactSummernote
                        value="Default value"
                        options={{
                          lang: "ru-RU",
                          height: 350,
                          dialogsInBody: true,
                          toolbar: [
                            ["style", ["style"]],
                            ["font", ["bold", "underline", "clear"]],
                            ["fontname", ["fontname"]],
                            ["para", ["ul", "ol", "paragraph"]],
                            ["table", ["table"]],
                            ["insert", ["link", "picture", "video"]],
                            ["view", ["fullscreen", "codeview"]],
                          ],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="pro-head">
                  <h3 className="pro-title without-border mb-0">
                    Social Links
                  </h3>
                </div>
                <div className="pro-body">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Facebook</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Dribble</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Twitter</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>LinkedIn</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Behance</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Behance</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card text-end">
                <div className="pro-body">
                  <button className="btn btn-secondary click-btn btn-plan">
                    Cancel
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-primary click-btn btn-plan"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default FreelancerSettings;
