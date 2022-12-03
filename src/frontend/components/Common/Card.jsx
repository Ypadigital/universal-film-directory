import React from "react";
import { Link } from "react-router-dom";
import { EmployData } from "../Data/EmployData";
import { FreelancerData } from "../Data/UserDatas";
import Rating from "./Ratings";

export const CardFeedBacks = ({ data, reviews }) => {
  const user = EmployData.find((user) => user.id === data.userId);
  return (
    <div className="about-author">
      <div className="author-details">
        <a href="/" className="blog-author-name">
          {user.name}
        </a>
        <div className="rating">
          <span className="average-rating">( 4.5 )</span>
          <Rating value={3} />
        </div>
        <p className="mb-0">{data.desc}</p>
      </div>
    </div>
  );
};

export const CardProjects = ({ proposal }) => {
  const user = FreelancerData.find(
    (user) => user.id === Number(proposal.userId)
  );
  return (
    <div className="bids-card">
      <div className="row align-items-center">
        <div className="col-lg-2">
          <div className="author-img-wrap">
            <Link to={`/freelancer/${user.id}`}>
              <img className="img-fluid" alt="" src={user.image} />
            </Link>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="author-detail">
            <h4>
              <Link to={`/freelancer/${user.id}`}>{user.name}</Link>
            </h4>
            <div className="rating">
              <span className="average-rating me-2">({user.totalRates})</span>
              <Rating value={user.totalRates} />
            </div>
            <p className="mb-0">{proposal.letter}</p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="proposal-amnt text-end">
            <h3>${proposal.price}</h3>
            <p className="mb-0">in {proposal.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
