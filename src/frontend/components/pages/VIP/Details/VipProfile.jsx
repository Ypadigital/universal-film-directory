import React from "react";
import StickyBox from "react-sticky-box";
import { FrelancerLanguages, FrelancerSkills } from "../../../Data/UserDatas";
// Import Images
import {
  Tab_icon_01,
  Tab_icon_03,
  Tab_icon_04,
  Tab_icon_05,
} from "../../../imagepath";
import Awards from "./Awards";
import Experiance from "./Experiance";
import OverView from "./OverView";
import UserInfo from "./UserInfo";

const VipProfile = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <UserInfo />
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
                      <a className="nav-link" href="#experience">
                        <img src={Tab_icon_03} height={25} alt="UserImage" />
                        <p className="bg-violet">Experience</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#education">
                        <img src={Tab_icon_04} height={25} alt="UserImage" />
                        <p className="bg-yellow">Awards</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#skill">
                        <img src={Tab_icon_05} height={25} alt="UserImage" />
                        <p className="bg-pink">Skills</p>
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* Overview Tab Content */}
                <OverView />
                {/* /Overview Tab Content */}

                {/* Experience Tab Content */}
                <Experiance />
                {/* /Experience Tab Content */}
                {/* Educational Tab Content */}
                <Awards />
                {/* /Educational Tab Content */}
                {/* Technical Tab Content */}
                <div className="pro-post project-widget widget-box" id="skill">
                  <h3 className="pro-title"> Skills</h3>
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
              </div>
            </div>
            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <StickyBox offsetTop={144} offsetBottom={20}>
                {/* Follow Widget */}
                <div className="pro-post widget-box about-widget">
                  <h4 className="pro-title mb-0">About Me</h4>
                  <ul className="latest-posts pro-content">
                    <li>
                      <p>Gender</p>
                      <h6>Female</h6>
                    </li>
                    <li>
                      <p>Experience</p>
                      <h6>5 Years</h6>
                    </li>
                    <li>
                      <p>From</p>
                      <h6>Bollywood</h6>
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
                          defaultValue={`https://www.kofejob.com/freelancer/john-smith`}
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
    </>
  );
};
export default VipProfile;
