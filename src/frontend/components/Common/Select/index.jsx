import React, { useEffect } from "react";
import styles from "./input.module.css";

function Select({
  type = "text",
  onClick,
  label,
  className,
  id,
  name,
  formik,
  children,
  ...rest
}) {
  useEffect(() => {
    if (formik.values[name] === undefined) {
      if (children[0]) formik.setFieldValue(name, children[0].props.value);
    }
  }, [children, formik, name]);

  const error = formik.touched[name] && formik.errors?.[name];
  let classes = `${styles.container} ${className} `;
  if (error) classes += styles["error"];
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
      <select name={name} id={name} className="form-control select" {...rest}>
        <option>Select an option</option>
        {children}
      </select>
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
}

export { Select };
