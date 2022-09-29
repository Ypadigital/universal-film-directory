import React from "react";
import { useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { CardFeedBacks } from "../../Common/Card";
import HireModal from "../../Common/Modals/HireModal";
import {
  FreelancerData,
  FrelancerLanguages,
  FrelancerSkills,
} from "../../Data/UserDatas";
// Import Images
import {
  Tab_icon_01,
  Tab_icon_02,
  Tab_icon_03,
  Tab_icon_04,
  Tab_icon_05,
  Tab_icon_06,
} from "../../imagepath";
import Educatin from "./Educatin";
import Experiance from "./Experiance";
import OverView from "./OverView";
import UserInfo from "./UserInfo";
import Works from "./Works";

const DeveloperDetails = (props) => {
  const { id } = useParams();

  const freelancer = FreelancerData.find(
    (freelancer) => freelancer.id === Number(id)
  );
  const feedBacksData = [
    {
      userId: 1,
      desc: "I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.",
    },
    {
      userId: 3,
      desc: "I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.",
    },
    {
      userId: 2,
      desc: "I am a professional graphic designer.",
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <UserInfo freelancer={freelancer} />
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-view">
                {/* Tab Detail */}
                <nav className="provider-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#overview"
                        data-bs-toggle="tab"
                      >
                        <img src={Tab_icon_01} height={25} alt="UserImage" />
                        <p className="bg-red">Overview</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#project">
                        <img src={Tab_icon_02} height={25} alt="User Image" />
                        <p className="bg-blue">Projects</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#experience">
                        <img src={Tab_icon_03} height={25} alt="User Image" />
                        <p className="bg-violet">Experience</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#education">
                        <img src={Tab_icon_04} height={25} alt="User Image" />
                        <p className="bg-yellow">Education</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#skill">
                        <img src={Tab_icon_05} height={25} alt="User Image" />
                        <p className="bg-pink">Skills</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#feedback">
                        <img src={Tab_icon_06} height={25} alt="User Image" />
                        <p className="bg-green">Feedbacks</p>
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* Overview Tab Content */}
                <OverView freelancer={freelancer} />
                {/* /Overview Tab Content */}
                {/* Project Tab Content */}
                <Works />
                {/* /Project Tab Content */}
                {/* Experience Tab Content */}
                <Experiance />
                {/* /Experience Tab Content */}
                {/* Educational Tab Content */}
                <Educatin />
                {/* /Educational Tab Content */}
                {/* Technical Tab Content */}
                <div className="pro-post project-widget widget-box" id="skill">
                  <h3 className="pro-title">Technical Skills</h3>
                  <div className="pro-content">
                    <div className="tags">
                      {FrelancerSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="badge badge-pill badge-skills"
                        >
                          + {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* /Technical Tab Content */}
                {/* Feedback Tab Content */}
                <div className="pro-post author-widget clearfix" id="feedback">
                  <div className="widget-title-box clearfix">
                    <h3 className="pro-title mb-0">Feedbacks</h3>
                  </div>
                  {feedBacksData.map((feedBack, index) => (
                    <CardFeedBacks key={index} data={feedBack} />
                  ))}
                </div>
                {/* /Feedback Tab Content */}
              </div>
            </div>
            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Follow Widget */}
                <div className="pro-post widget-box follow-widget">
                  <button className="btn follow-btn">+ Follow</button>
                  <ul className="follow-posts pro-post">
                    <li>
                      <p>Following</p>
                      <h6>{freelancer.following}</h6>
                    </li>
                    <li>
                      <p>Followers</p>
                      <h6>{freelancer.followes}</h6>
                    </li>
                  </ul>
                </div>
                {/* /Follow Widget */}
                {/* Language Widget */}
                <div className="pro-post widget-box language-widget">
                  <h4 className="pro-title mb-0">Language Skills</h4>
                  <ul className="latest-posts pro-content">
                    {FrelancerLanguages.map((language, index) => (
                      <li key={index}>
                        <p>{language.language}</p>
                        <div className="progress progress-md mb-0">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${language.percent}%` }}
                            aria-valuenow={language.percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* /Language Widget */}
                {/* About Widget */}
                <div className="pro-post widget-box about-widget">
                  <h4 className="pro-title mb-0">About Me</h4>
                  <ul className="latest-posts pro-content">
                    <li>
                      <p>Gender</p>
                      <h6>{freelancer.gender}</h6>
                    </li>
                    <li>
                      <p>Experience</p>
                      <h6>{freelancer.experiance}</h6>
                    </li>
                    <li>
                      <p>Location</p>
                      <h6>{freelancer.location}</h6>
                    </li>
                  </ul>
                </div>
                {/* /About Widget */}
                {/* Categories */}
                <div className="pro-post category-widget">
                  <div className="widget-title-box">
                    <h4 className="pro-title">Social Links</h4>
                  </div>
                  <ul className="latest-posts pro-content mb-3">
                    <li>
                      <a href="#">http://www.facebook.com/john...</a>
                    </li>
                    <li>
                      <a href="#">http://www.Twitter.com/john...</a>
                    </li>
                    <li>
                      <a href="#">Http://www.googleplus.com/john... </a>
                    </li>
                    <li>
                      <a href="#"> Http://www.behance.com/john...</a>
                    </li>
                    <li>
                      <a href="#"> Http://www.pinterest.com/john...</a>
                    </li>
                  </ul>
                </div>
                {/* /Categories */}
                {/* LInk Widget */}
                <div className="pro-post widget-box post-widget">
                  <h3 className="pro-title">Profile Link</h3>
                  <div className="pro-content">
                    <div className="form-group profile-group mb-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={`https://www.kofejob.com/freelancer/${freelancer.id}`}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-success sub-btn"
                            type="submit"
                          >
                            <i className="fa fa-clone" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Link Widget */}
                {/* Share Widget */}
                <div className="pro-post widget-box post-widget">
                  <h3 className="pro-title">Share</h3>
                  <div className="pro-content">
                    <button className="share-icon">
                      <i className="fas fa-share-alt" /> Share
                    </button>
                  </div>
                </div>
                {/* /Share Widget */}
              </StickyBox>
            </div>
            {/* /Blog Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <HireModal freelancer={freelancer} />
      {/* /The Modal */}
    </>
  );
};
export default DeveloperDetails;
