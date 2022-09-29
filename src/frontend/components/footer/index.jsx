import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Googleplay, Appstore } from "../imagepath";

class Footer extends Component {
  render() {
    // const exclusionArray = ["chat", "chat-stylist", "voice-call", "video-call", "map-grid", "map-list"];
    // if (
    //   exclusionArray.indexOf(this.props.location.pathname.split("/")[1]) >= 0
    // ) {
    //   return "";
    // }

    return (
      <>
        {/* Footer */}
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h2 className="footer-title">Office Address</h2>
                  <div className="footer-address">
                    <div className="off-address">
                      <p className="mb-2">New York, USA (HQ)</p>
                      <address className="mb-0">
                        750 Sing Sing Rd, Horseheads, NY, 14845
                      </address>
                      <p>
                        Call:{" "}
                        <a href="#">
                          <u>469-537-2410</u> (Toll-free)
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Useful Links</h2>
                    <ul>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="blog-list.html">Blog</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Help &amp; Support</h2>
                    <ul>
                      <li>
                        <a href="chats.html">Chat</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq</a>
                      </li>
                      <li>
                        <a href="review.html">Reviews</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Other Links</h2>
                    <ul>
                      <li>
                        <a href="freelancer-dashboard.html">Freelancers</a>
                      </li>
                      <li>
                        <a href="freelancer-portfolio.html">
                          Freelancer Details
                        </a>
                      </li>
                      <li>
                        <a href="project.html">Project</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Mobile Application</h2>

                    <div className="row g-2">
                      <div className="col">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src={Appstore}
                            alt="app-store"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src={Googleplay}
                            alt="google-play"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Footer Top */}
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              {/* Copyright */}
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-text">
                      <p className="mb-0">© 2021 All Rights Reserved</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 right-text">
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" className="icon" target="_blank">
                            <i className="fab fa-instagram" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="icon" target="_blank">
                            <i className="fab fa-linkedin-in" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="icon" target="_blank">
                            <i className="fab fa-twitter" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Copyright */}
            </div>
          </div>
          {/* /Footer Bottom */}
        </footer>
        {/* /Footer */}
      </>
    );
  }
}

export default Footer;
