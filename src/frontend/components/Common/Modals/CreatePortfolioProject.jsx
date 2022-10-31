import React from "react";
import { Link } from "react-router-dom";
import ReactSummernote from "react-summernote";

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
            <form>
              <div className="modal-info">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="I will work on your video as editor, filmer or director...."
                      />
                    </div>
                    <div className="form-group">
                      <label>Decription</label>
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
                    <div className="form-group">
                      <label>Price</label>
                      <div className="row">
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="$500"
                          />
                        </div>
                        <div className="col-md-4">
                          <select className="form-control select">
                            <option selected>Per Hour</option>
                            <option value="1">Per Day</option>
                            <option value="2">Per Week</option>
                            <option value="3">Per Month</option>
                          </select>
                        </div>
                      </div>
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
