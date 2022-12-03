import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";

import { useDataContext } from "../../../contexts/dataContext";
import {
  formatReviews,
  getRandomKey,
  getRatingConfig,
} from "../../../utils/helpers";
import SideBar from "../../Common/SideBar";

const Review = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  const { projects } = useDataContext();
  let jobs = projects.data;
  if (!!!projects.isLoading) {
    jobs = jobs.filter((project) => project.status === "Completed");
  }
  if (!jobs.length) return "Loading...";
  const starsUI = {
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };
  let reviews = formatReviews(jobs);
  return (
    <>
      {jobs && !!!jobs.isLoading && (
        <SideBar freelancer={true}>
          <div className="card">
            <div className="card-header">
              <h3 className="pro-title without-border">Reviews</h3>
            </div>
            <div className="card-body">
              <div className="reviews">
                {reviews.map((data, index) => (
                  <div
                    key={getRandomKey()}
                    className="review-content no-padding"
                  >
                    <h4>{data.title}</h4>
                    <div className="d-flex gap-10">
                      <span className="average-rating">{data.rating}</span>
                      <ReactStars
                        {...starsUI}
                        {...getRatingConfig(data.rating)}
                      />
                    </div>
                    <p className="mb-0">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SideBar>
      )}
    </>
  );
};
export default Review;
