import React from "react";
import { Link } from "react-router-dom";
import { TopDevelopers } from "./topdevelopers";
// Import Images
import { Banner_img, Icon_01, Icon_02, Icon_03, Subscribe } from "../imagepath";
import { CategoriesData } from "../Data/Categories";

const Home = () => {
  return (
    <>
      {/* Home Banner */}
      <section className="section home-banner row-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-7">
              <div className="banner-content">
                <h1>
                  Hire Top Film <br />
                  <span className="orange-text">And movie services</span>
                </h1>
                <p>With the world's #1 Films service marketplace.</p>
                <form className="form" name="store" id="store">
                  <div className="form-inner">
                    <div className="input-group">
                      <span className="drop-detail">
                        <select className="form-control select" name="storeID">
                          <option value="/">Hollywood</option>
                          <option value="/">Bollywood</option>
                          <option value="/">Tollywood</option>
                        </select>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Search here"
                      />
                      <button className="btn btn-primary sub-btn" type="button">
                        Search Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-5">
              <div className="banner-img">
                <img src={Banner_img} className="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Our Feature */}
      <section className="section feature">
        <div className="container">
          <div className="row">
            {/* Feature Item */}
            <div className="col-md-4">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src={Icon_01} className="img-fluid" alt="" />
                </div>
                <div className="feature-content">
                  <h3>919,207</h3>
                  <p>freelances</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-4">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src={Icon_02} className="img-fluid" alt="" />
                </div>
                <div className="feature-content">
                  <h3>25 - 100+</h3>
                  <p>Employers</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-4">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src={Icon_03} className="img-fluid" alt="" />
                </div>
                <div className="feature-content">
                  <h3>388,615</h3>
                  <p>Verified Actors</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
          </div>
        </div>
      </section>
      {/* /Our Feature */}
      {/*- Developed Project  */}
      <section className="section work">
        <div className="container-fluid">
          <div className="row">
            {/* Feature Item */}
            <div className="col-md-6 work-box bg1">
              <div className="work-content">
                <h2>I need a Freelancer</h2>
                <p>
                  Get the perfect Developed project for your budget from our
                  creative community.
                </p>
                <Link to="/project">
                  <i className="fas fa-long-arrow-alt-right long-arrow" />
                </Link>
              </div>
            </div>
            {/* /Feature Item */}
            <div className="col-md-6 work-box bg2">
              <div className="work-content">
                <h2>I have service to offer</h2>
                <p>
                  Do you want to earn money, find unlimited clients and build
                  your freelance career?
                </p>
                <Link to="/freelancer">
                  <i className="fas fa-long-arrow-alt-right long-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*- /Developed Project  */}
      {/* Projects */}
      <section className="section projects">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div className="section-header text-center">
                <div className="section-line" />
                <h2 className="header-title">
                  Get Inspired
                  <br /> By Film Projects
                </h2>
                <p>High Performing Solutions To Your</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/*- Project Item  */}
            {CategoriesData.map((val, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <div className="project-item">
                  <div className="project-img">
                    <Link to="/">
                      <img
                        src={val.image}
                        alt={val.titte}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>{val.total}</h4>
                      <h5>{val.titte}</h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon"></div>
                    </div>
                    <div className="project-content">
                      <h4>{val.freelancers}</h4>
                      <h5>Freelancers</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/*- /Project Item  */}
          </div>
        </div>
      </section>
      {/* /Projects */}
      {/* Subscribe */}
      <section className="section subscribe">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img src={Subscribe} className="img-fluid" alt="subscribe" />
            </div>
            <div className="col-md-6">
              <h3>Subscribe To Get Discounts, Updates &amp; More</h3>
              <p>Monthly product updates, industry news and more!</p>
              <form action="#" method="POST">
                <div className="form-inner">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                    <button className="btn btn-primary sub-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Subscribe */}
      {/* Top Instructor */}
      <TopDevelopers />
      {/* End Developer */}
    </>
  );
};
export default Home;
