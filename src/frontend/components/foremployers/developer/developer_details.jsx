import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { getProfileById } from "../../../services/profileService";
import { apiErrorMessage } from "../../../utils/handleAPIErrors";
import {
  formatTotalExperience,
  getProfileLink,
  getRandomKey,
} from "../../../utils/helpers";
import toast from "../../../utils/toast";
import { CardFeedBacks } from "../../Common/Card";
import InvatationModal from "../../Common/Modals/InvatationModal";
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
  const [isLoading, setisLoading] = useState(false);
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  let profileLink;
  if (details) profileLink = getProfileLink(details._id);

  useEffect(() => {
    setisLoading(true);
    (async () => {
      try {
        let response = await getProfileById(id);
        response = await response.data;
        let profile = response.data;
        setDetails(profile);
      } catch (error) {
        toast.error(apiErrorMessage(error));
      } finally {
        setisLoading(false);
      }
    })();
  }, [id]);

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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      {isLoading && <div className="loading" />}
      {!isLoading && !details && <div>No Profile Found</div>}
      {!isLoading && details && (
        <>
          <div className="breadcrumb-bar" />

          <div className="content">
            <div className="container">
              <UserInfo freelancer={details} />

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
                            <img src={Tab_icon_01} height={25} alt="" />
                            <p className="bg-red">Overview</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#project">
                            <img src={Tab_icon_02} height={25} alt="" />
                            <p className="bg-blue">Projects</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#experience">
                            <img src={Tab_icon_03} height={25} alt="" />
                            <p className="bg-violet">Experience</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#education">
                            <img src={Tab_icon_04} height={25} alt="" />
                            <p className="bg-yellow">Education</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#skill">
                            <img src={Tab_icon_05} height={25} alt="" />
                            <p className="bg-pink">Skills</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#feedback">
                            <img src={Tab_icon_06} height={25} alt="" />
                            <p className="bg-green">Feedbacks</p>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    {/* /Tab Detail */}
                    {/* Overview Tab Content */}
                    <OverView freelancer={details} />
                    {/* /Overview Tab Content */}
                    {/* Project Tab Content */}
                    <Works services={details.services} />

                    {/* /Project Tab Content */}
                    {/* Experience Tab Content */}
                    <Experiance experiences={details.experiences} />
                    {/* /Experience Tab Content */}
                    {/* Educational Tab Content */}
                    <Educatin education={details.education} />
                    {/* /Educational Tab Content */}
                    {/* Technical Tab Content */}
                    <div
                      className="pro-post project-widget widget-box"
                      id="skill"
                    >
                      <h3 className="pro-title">Technical Skills</h3>
                      <div className="pro-content">
                        <div className="tags gap-10 d-flex">
                          {details.categories.map((category, index) => (
                            <span
                              key={index}
                              className="badge badge-pill badge-skills"
                            >
                              + {category.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* /Technical Tab Content */}
                    {/* Feedback Tab Content */}
                    <div
                      className="pro-post author-widget clearfix"
                      id="feedback"
                    >
                      <div className="widget-title-box clearfix">
                        <h3 className="pro-title mb-0">Reviews</h3>
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
                  <StickyBox offsetTop={144} offsetBottom={20}>
                    {/* Follow Widget */}
                    <div className="pro-post widget-box about-widget">
                      <h4 className="pro-title mb-0">About Me</h4>
                      <ul className="latest-posts pro-content">
                        <li>
                          <p>Experience</p>
                          <h6>{formatTotalExperience(details.experiences)}</h6>
                        </li>
                        <li>
                          <p>Location</p>
                          <h6>{details.location}</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="pro-post widget-box language-widget">
                      <h4 className="pro-title mb-0">Language Skills</h4>
                      <ul className="latest-posts pro-content">
                        {details.languages.map((language, index) => (
                          <li key={index}>
                            <p>{language}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pro-post category-widget">
                      <div className="widget-title-box">
                        <h4 className="pro-title">Social Links</h4>
                      </div>
                      <ul className="latest-posts pro-content mb-3">
                        {Object.keys(details.socialLinks).map((link) => {
                          const value = details.socialLinks[link];
                          return <li key={getRandomKey()}>{value}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="pro-post widget-box post-widget">
                      <h3 className="pro-title">Profile Link</h3>
                      <div className="pro-content">
                        <div className="form-group profile-group mb-0">
                          <div className="input-group d-flex align-items-center gap-10">
                            <span className="pl-3 handle-overflow">
                              {profileLink}
                            </span>
                            <div className="input-group-append">
                              <button
                                onClick={() => {
                                  copyToClipboard(profileLink);
                                  toast.success(
                                    "Profile URL was copied to clipboard"
                                  );
                                }}
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
                    <div className="pro-post widget-box post-widget">
                      <h3 className="pro-title">Share</h3>
                      <div className="pro-content">
                        <button className="share-icon">
                          <i className="fas fa-share-alt" /> Share
                        </button>
                      </div>
                    </div>
                  </StickyBox>
                </div>
              </div>
            </div>
          </div>
          <InvatationModal />
        </>
      )}
    </>
  );
};
export default DeveloperDetails;
