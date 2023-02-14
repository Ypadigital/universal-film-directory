import React from "react";
import styles from "./input.module.css";

function Input({
  type = "text",
  onClick,
  label,
  className,
  id,
  name,
  formik,
  ...rest
}) {
  const error = formik.touched[name] && formik.errors?.[name];
  let classes = `${styles.container} form-group form-focus`;
  if (className) classes += ` ${className}`;
  if (error) classes += styles["error"];
  let placeholder = rest.placeholder;
  if (formik) {
    Object.assign(rest, {
      onChange: formik.handleChange,
      value: formik.values[name],
    });
  }
  return (
    <div className={classes}>
      {label && (
        <label className={"focus-label"} htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className="form-control floating"
          id={id ?? name}
          name={name}
          type={type}
          onClick={onClick}
          {...rest}
          placeholder={placeholder}
        />
      </div>
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
}

export { Input };
