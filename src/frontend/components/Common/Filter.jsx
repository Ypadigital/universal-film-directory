import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { countries, getRandomKey } from "../../utils/helpers";

function Filter({ project, categories }) {
  const router = useHistory();
  const clearFilters = () => router.push("/freelancer");
  console.log(router);
  const [query, setquery] = useState({});
  return (
    <StickyBox offsetTop={144} offsetBottom={20}>
      {/* Search Filter */}
      <div className="card search-filter">
        <div className="card-header d-flex justify-content-between">
          <h4 className="card-title mb-0">FILTERS</h4>
          <a className="cursor-pointer" href="/freelancer">
            Clear All
          </a>
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

          <div className="filter-widget">
            <h4>Category</h4>
            <div className="form-group">
              <select className="form-control select">
                {categories.map((category, index) => (
                  <option key={getRandomKey()} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-widget">
            <h4>Location</h4>
            <div className="form-group">
              <select className="form-control select">
                {countries.map((country, index) => (
                  <option key={getRandomKey()} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

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
