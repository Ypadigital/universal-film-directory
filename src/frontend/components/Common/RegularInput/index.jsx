import React from "react";
import styles from "./input.module.css";

function RegularInput({
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
  let classes = `${styles.container} ${className} form-group`;
  if (error) classes += styles["error"];
  let placeholder = rest.placeholder;
  if (formik) {
    Object.assign(rest, {
      onChange: formik?.handleChange,
      value: formik?.values[name],
    });
  }
  return (
    <div className={classes}>
      {label && (
        <label className={""} htmlFor={name}>
          {label}
        </label>
      )}
      <div className="">
        <input
          className={`form-control ${type === "date" && "datetimepicker"}`}
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

export { RegularInput };
