import React from "react";
import Rating from "../Ratings";
import ModalFrame from "./ModalFrame";

function WriteReviwerModal({ isActive, setIsActive, selectedJob }) {
  return (
    <ModalFrame isActive={isActive} setIsActive={setIsActive}>
      <form>
        <h4 className="modal-title">Review Freelancer</h4>
        <div className="form-row">
          <div className="form-group col-12">
            <label>Write Feedback</label>
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Comment Here"
              defaultValue={""}
            />
          </div>
          <div className="col-12">
            <h5>Ratings</h5>
          </div>
          <div className="form-group col-md-4">
            <p className="mb-2 rating-text">Overall Ratings</p>
            <div className="rating red">
              <Rating value={4} />
            </div>
          </div>
        </div>
        <div className="submit-section text-end mt-2">
          <button type="submit" className="btn btn-primary update-btn">
            update
          </button>
        </div>
      </form>
    </ModalFrame>
  );
}

export default WriteReviwerModal;
