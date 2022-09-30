import React from "react";
import EducationModal from "./Modals/EducationModal";
import ExperianceModal from "./Modals/ExperianceModal";

function TableEdSkill({ title, main }) {
  const EducationData = {
    column: ["Level", "School", "Start Date", "End Date", "Description"],
    table: [
      {
        title: "Bachelors",
        start: "12/5/2015",
        end: "12/5/2019",
        school: "University of California",
        summery: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Masters",
        start: "12/5/2018",
        end: "12/5/2030",
        school: "Arizona State University",
        summery:
          "Consectetur lacinia, tortor odio aliquam mauris, eget aliquam ",
      },
    ],
  };

  const ExperianceData = {
    column: ["Title", "Company", "Start Date", "End Date", "Description"],
    table: [
      {
        title: "Photographer",
        start: "02/12/2001",
        end: "31/9/2008",
        CompanyName: "XYZ Company",
        summery:
          "Sed ac risus et justo dignissim ultrices. Sed auctor, nulla ut ",
      },
      {
        title: "Film Maker",
        start: "11/8/2000",
        end: "12/5/1999",
        CompanyName: "ABC Company",
        summery:
          "Tortor odio aliquam mauris, eget aliquam nisl nunc eget dolor.",
      },
    ],
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h4 className="card-title">{title}</h4>
                </div>
                <div className="col-auto">
                  <a
                    href={`#${main ? "education" : "experiance"}`}
                    data-bs-toggle="modal"
                    className="btn-right btn btn-primary"
                  >
                    Add {title}
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive table-job">
                <table className="table table-hover table-center mb-0">
                  <thead className="thead-pink">
                    <tr>
                      {main
                        ? EducationData.column.map((ed, index) => (
                            <th key={index}>{ed}</th>
                          ))
                        : ExperianceData.column.map((ed, index) => (
                            <th key={index}>{ed}</th>
                          ))}
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {main
                      ? EducationData.table.map((ed, index) => (
                          <tr key={index}>
                            <td>
                              <span className="d-block text-danger">
                                {ed.title}
                              </span>
                            </td>
                            <td>{ed.school}</td>
                            <td>{ed.start}</td>
                            <td>{ed.end}</td>
                            <td>{ed.summery.substring(0, 40)}...</td>
                            <td>
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </td>
                          </tr>
                        ))
                      : ExperianceData.table.map((e, index) => (
                          <tr key={index}>
                            <td>
                              <span className="d-block text-danger">
                                {e.title}
                              </span>
                            </td>
                            <td>{e.CompanyName}</td>
                            <td>{e.start}</td>
                            <td>{e.end}</td>
                            <td>{e.summery.substring(0, 40)}...</td>
                            <td>
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EducationModal />
      <ExperianceModal />
    </>
  );
}

export default TableEdSkill;
