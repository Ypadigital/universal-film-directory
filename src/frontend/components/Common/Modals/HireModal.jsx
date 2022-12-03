import React, { useEffect } from "react";
import ModalFrame from "./ModalFrame";

function HireModal({ onHire, isShowing, setIsShowing }) {
  return (
    <ModalFrame isActive={isShowing} setIsActive={setIsShowing}>
      <div className="text-center  pt-0 my-4">
        <h5 className="modal-title">
          Are you sure you would like to hire this freelancer?
        </h5>
      </div>
      <div className="submit-section text-center">
        <button
          onClick={onHire}
          className="btn btn-primary btn-block submit-btn"
        >
          Hire Now
        </button>
      </div>
    </ModalFrame>
  );
}

export default HireModal;
