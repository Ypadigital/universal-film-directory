import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "../../../Icons/CloseIcon";

import styles from "./modal-frame.module.css";

export default function ModalFrame({ isActive, setIsActive, children }) {
  const containerRef = useRef(null);
  const [containerClass, setContainerClass] = useState(
    `${styles["container"]}`
  );

  const closeModal = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (containerRef.current !== null) {
      document.body.style.overflow = isActive ? "hidden" : "auto";
      if (isActive && !containerClass.includes(styles["active"])) {
        containerRef.current.style.display = "flex";
        setTimeout(() => {
          setContainerClass((value) => (value += ` ${styles["active"]} pb-20`));
        }, 50);
      }
      if (!isActive) {
        document.body.style.overflow = "auto";
        setContainerClass(`${styles["container"]} pb-20`);
        setTimeout(() => {
          if (containerRef.current !== null) {
            containerRef.current.style.display = "none";
          }
        }, 400);
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [containerClass, isActive, setIsActive]);

  return (
    <div ref={containerRef} className={containerClass} onClick={closeModal}>
      <div
        className={`${styles["modal-body"]} p-8 lg:p-16 `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`modal-header ${styles['close-btn']}`}>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
