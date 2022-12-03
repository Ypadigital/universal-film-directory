import React from "react";
import { useEffect } from "react";
import ReactSummernote from "react-summernote";
import styles from "./input.module.css";
import $ from "jquery";

function HTMLInput({ label, className, name, formik }) {
  const error = formik.touched[name] && formik.errors?.[name];
  let classes = `${styles.container} ${className} form-group`;
  if (error) classes += styles["error"];
  const classNa = name || "summer-note";

  return (
    <div className={classes}>
      {label && <label className="m-4">{label}</label>}
      <div className="">
        <ReactSummernote
          className={classNa}
          onChange={formik.handleChange(name)}
          // value={formik.values[name]}
          options={{
            lang: "en-en",
            height: 350,
            dialogsInBody: true,
            toolbar: [
              ["style", ["style"]],
              ["font", ["bold", "underline", "clear"]],
              ["fontname", ["fontname"]],
              ["para", ["ul", "ol", "paragraph"]],
              ["table", ["table"]],
              ["insert", ["link", "picture", "video"]],
              ["view", ["fullscreen", "codeview"]],
            ],
          }}
        />
      </div>
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
}

export { HTMLInput };
