import React from "react";
import styles from "./button.module.css";

function Button({ text, children, className, onClick, type, ...rest }) {
  let containerClass = styles.container + " btn";
  if (className) containerClass += ` btn ${className}`;
  if (className === "btn-red") containerClass += ` ${styles["btn-red"]}`;
  return (
    <button type={type} onClick={onClick} className={containerClass} {...rest}>
      {text || children}
    </button>
  );
}

export { Button };
