import React from "react";
import { Link, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import {
  company_img1,
  Img_01,
  Img_02,
  Img_03,
  Flags_de,
  Flags_us,
  Flags_es,
  Exp_Icon_01,
  Exp_Icon_02,
  Exp_Icon_03,
  Exp_Icon_04,
  Exp_Icon_05,
  Exp_Icon_06,
} from "../../imagepath";
import { ProjectProposal, ProjectsData } from "../../Data/ProjectDatas";
import ProjectInfo from "./ProjectInfo";
import ProjectDetailsCard from "./ProjectDetailsCard";
import { CardProjects } from "../../Common/Card";
import FavoriteModal from "../../Common/Modals/FavoriteModal";
import { EmployData } from "../../Data/EmployData";
import Rating from "../../Common/Ratings";
import ProjectSideBar from "./ProjectSideBar";
import SendProposalModal from "../../Common/Modals/SendProposalModal";

const ProjectDetails = (props) => {
  const { id } = useParams();

  const project = ProjectsData.find((project) => project.id === Number(id));
  const user = EmployData.find((user) => user.id === Number(project.userId));
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <ProjectInfo project={project} />
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-view">
                {/* Job Detail */}
                <ProjectDetailsCard project={project} />
                {/* /Job Detail */}

                {/* Senior Animator  */}
                <div className="pro-post widget-box">
                  <h3 className="pro-title">Senior Animator</h3>
                  <div className="pro-content">
                    <p>{project.description}</p>
                  </div>
                </div>
                {/* /Senior Animator  */}
                {/* Job Activity  */}
                <div className="pro-post project-widget widget-box">
                  <h3 className="pro-title">Activity of the Job</h3>
                  <div className="pro-content">
                    <div className="mb-0">
                      <ul className="activity-list clearfix">
                        {project.activity.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Job Activity  */}
                {/* Skills Required  */}
                <div className="pro-post project-widget widget-box">
                  <h3 className="pro-title">Skills Required</h3>
                  <div className="pro-content">
                    <div className="tags">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="badge badge-pill badge-design"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* /Skills Required  */}
                <div className="pro-post widget-box">
                  <h3 className="pro-title">Project Proposals</h3>
                  <div className="average-bids mt-4">
                    <p>
                      <span className="text-highlight">
                        {ProjectProposal.length} freelancers
                      </span>{" "}
                      are bidding on average{" "}
                      <span className="text-highlight">${project.price}</span>{" "}
                      for this job
                    </p>
                  </div>
                  <div className="proposal-cards">
                    {/* project proposal  */}
                    {ProjectProposal.slice(0, 3).map((proposal, index) => (
                      <CardProjects key={index} proposal={proposal} />
                    ))}
                    {/* /project proposal  */}
                  </div>
                  <div className="proposal-btns mt-3">
                    <Link to={`/proposal/${project.id}`} className="pro-btn">
                      View all 18 Propsals
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <ProjectSideBar project={project} user={user} />
            </div>
            {/* /Blog Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <>
        {/* The Modal */}
        <SendProposalModal />
        {/* /The Modal */}
      </>
    </>
  );
};
export default ProjectDetails;
