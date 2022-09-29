import React from "react";
import { ProjectProposal } from "../../Data/ProjectDatas";
import {
  Exp_Icon_01,
  Exp_Icon_02,
  Exp_Icon_03,
  Exp_Icon_04,
  Exp_Icon_05,
  Exp_Icon_06,
} from "../../imagepath";

function ProjectDetailsCard({ project }) {
  const Card1Data = [
    {
      title: "Job Expiry",
      sub: project.expireDate,
    },
    {
      title: "Location",
      sub: project.location,
    },
    {
      title: "Proposals",
      sub: `${ProjectProposal.length} Received`,
    },
    {
      title: "Price type",
      sub: project.priceType,
    },
  ];
  const Card2Data = [
    {
      title: "Freelancer Type",
      sub: project.freelancerType,
      img: Exp_Icon_01,
    },
    {
      title: "Project Duration",
      sub: project.projectDuraction,
      img: Exp_Icon_02,
    },
    {
      title: "Level ",
      sub: project.projectLevel,
      img: Exp_Icon_03,
    },
    {
      title: "Job Type",
      sub: project.jobType,
      img: Exp_Icon_04,
    },
    {
      title: "Experience ",
      sub: project.experiance,
      img: Exp_Icon_05,
    },
    {
      title: "Qualifications",
      sub: project.qualification,
      img: Exp_Icon_06,
    },
  ];
  return (
    <>
      <div className="post-widget">
        <div className="pro-content">
          <div className="row">
            {Card1Data.map((data, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-3">
                <div className="pro-post job-type">
                  <p>{data.title}</p>
                  <h6>{data.sub}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pro-post widget-box exp-widget pb-0">
        <div className="pro-content pt-0">
          <div className="row">
            {Card2Data.map((data2, index) => (
              <div key={index} className="col-md-4">
                <div className="exp-detail">
                  <img className="img-fluid" alt="" src={data2.img} />
                  <div className="exp-info">
                    <p>{data2.title}</p>
                    <h5>{data2.sub}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailsCard;
