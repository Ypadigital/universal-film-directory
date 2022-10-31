import React from "react";
import StickyBox from "react-sticky-box";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import Rating from "./Ratings";

function Filter({ project }) {
  const Rates = [
    {
      number: 10,
      rate: 5,
    },
    {
      number: 3,
      rate: 4,
    },
    {
      number: 6,
      rate: 3,
    },
    {
      number: 9,
      rate: 2,
    },
    {
      number: 5,
      rate: 1,
    },
  ];
  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      {/* Search Filter */}
      <div className="card search-filter">
        <div className="card-header d-flex justify-content-between">
          <h4 className="card-title mb-0">FILTERS</h4>
          <a href="">Clear All</a>
        </div>
        <div className="card-body">
          <div className="filter-widget">
            <h4>Keywords</h4>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Keywords"
              />
            </div>
          </div>
          {project ? (
            <div className="filter-widget">
              <h4>Region</h4>
              <div className="form-group">
                <select className="form-control select">
                  <option>Select Region</option>
                  <option value="/">Hollywood</option>
                  <option value="/">Bollywood</option>
                  <option value="/">Tollywood</option>
                  <option value="/">Nollywood</option>
                  <option value="/">Chinawood</option>
                </select>
              </div>
            </div>
          ) : (
            <div className="filter-widget">
              <h4>Category</h4>
              <div className="form-group">
                <select className="form-control select">
                  <option>Select Category</option>
                  <option value="/">Photography</option>
                  <option value="/">Dancer</option>
                  <option value="/">Director</option>
                  <option value="/">Makeup Artst</option>
                  <option value="/">Song Writer</option>
                </select>
              </div>
            </div>
          )}

          <div className="filter-widget">
            <h4>Location</h4>
            <div className="form-group">
              <select className="form-control select">
                <option>USA</option>
                <option>India</option>
                <option>China</option>
                <option>Japan</option>
                <option>Africa</option>
              </select>
            </div>
          </div>

          <div className="filter-widget">
            <h4>Add Skills</h4>
            <div className="form-group">
              <span className="badge badge-pill badge-skill">+ Web Design</span>
              <span className="badge badge-pill badge-skill">+ UI Design</span>
              <span className="badge badge-pill badge-skill">+ Node Js</span>
              <span className="badge badge-pill badge-skill">+ Angular</span>
              <span className="badge badge-pill badge-skill">+ Wordpress</span>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="filter-widget">
            <h4>Experience</h4>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_specialist" />
                <span className="checkmark" /> 0-1 years
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_exp" defaultChecked />
                <span className="checkmark" /> 2-5 years
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_exp" />
                <span className="checkmark" /> 5-8 years
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_exp" />
                <span className="checkmark" /> 9-12 years
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_exp" />
                <span className="checkmark" /> Mastered
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_exp" />
                <span className="checkmark" /> Professional
              </label>
            </div>
          </div>

          {!project && (
            <div className="filter-widget">
              <h4>Reviews</h4>
              {Rates.map((rate, index) => (
                <div key={index}>
                  <label className="custom_check">
                    <input type="checkbox" name="pro_ratings" />
                    <span className="checkmark" />
                    <span className="rating">
                      <Rating value={rate.rate} />
                      <span className="average-rating">({rate.number})</span>
                    </span>
                  </label>
                </div>
              ))}
            </div>
          )}

          <div className="btn-search">
            <button type="button" className="btn btn-block">
              Search
            </button>
          </div>
        </div>
      </div>
      {/* /Search Filter */}
    </StickyBox>
  );
}

export default Filter;
