import React from "react";

function Rating({ value }) {
  return (
    <>
      <span>
        {value >= 1 ? (
          <i className="fas fa-star filled" />
        ) : value >= 0.5 ? (
          <i className="fas fa-star-half filled" />
        ) : (
          <i className="fas fa-star " />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <i className="fas fa-star filled" />
        ) : value >= 1.5 ? (
          <i className="fas fa-star-half filled" />
        ) : (
          <i className="fas fa-star" />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <i className="fas fa-star filled" />
        ) : value >= 2.5 ? (
          <i className="fas fa-star-half filled" />
        ) : (
          <i className="fas fa-star" />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <i className="fas fa-star filled" />
        ) : value >= 3.5 ? (
          <i className="fas fa-star-half filled" />
        ) : (
          <i className="fas fa-star" />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <i className="fas fa-star filled" />
        ) : value >= 4.5 ? (
          <i className="fas fa-star-half filled" />
        ) : (
          <i className="fas fa-star" />
        )}
      </span>
    </>
  );
}

export default Rating;
