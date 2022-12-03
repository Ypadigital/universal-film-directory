import React, { useState } from "react";
import { formatDatewithSlash } from "../../utils/helpers";
import EducationModal from "./Modals/EducationModal";

function EducationTable({ education, addEducation, removeEducation }) {
  const [isShowingModal, setisShowingModal] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h4 className="card-title">Education</h4>
                </div>
                <div className="col-auto">
                  <button
                    onClick={() => setisShowingModal(true)}
                    className="btn-right btn btn-primary"
                  >
                    Add Education
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive table-job">
                <table className="table table-hover table-center mb-0">
                  <thead className="thead-pink">
                    <tr>
                      <th>Title</th>
                      <th>School</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.length > 0 ? (
                      education.map((ed, index) => (
                        <tr key={index}>
                          <td>
                            <span className="d-block text-danger">
                              {ed.title}
                            </span>
                          </td>
                          <td>{ed.school}</td>
                          <td>{formatDatewithSlash(ed.startDate)}</td>
                          <td>{formatDatewithSlash(ed.endDate)}</td>
                          <td>{ed.description.substring(0, 40)}...</td>
                          <td>
                            <button
                              onClick={() => removeEducation(index)}
                              className="btn trash-icon"
                            >
                              <i className="far fa-trash-alt" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6">No Education Added</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EducationModal
        isActive={isShowingModal}
        setIsActive={setisShowingModal}
        addEducation={addEducation}
      />
    </>
  );
}

export default EducationTable;
