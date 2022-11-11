import React from "react";

function SortsTags({ total, currentSort, onSort }) {
  return (
    <>
      <div className="sort-tab">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="d-flex align-items-center">
              <div className="freelance-view">
                <h4>Showing {total} results</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="d-flex justify-content-sm-end">
              <div className="sort-by">
                <select
                  value={currentSort}
                  onChange={onSort}
                  className="custom-select form-select"
                >
                  <option>Rating</option>
                  <option>Latest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SortsTags;
