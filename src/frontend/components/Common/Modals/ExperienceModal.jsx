import React from "react";
import ModalFrame from "./ModalFrame";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegularInput } from "../RegularInput";
import { TextArea } from "../TextArea";

const validationSchema = Yup.object({
  title: Yup.string().trim().min(2).label("Title"),
  company: Yup.string().trim().min(2).label("Company Name"),
  startDate: Yup.string().label("Start Date"),
  endDate: Yup.string().label("End Date"),
  description: Yup.string().trim().min(2).label("Description"),
});

function ExperienceModal({ isActive, setIsActive, addExperience }) {
  const initialValues = {
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const handleSubmit = (values) => {
    addExperience(values);
    setIsActive(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <ModalFrame isActive={isActive} setIsActive={setIsActive}>
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="row">
          <RegularInput
            formik={formik}
            name="title"
            label="Title"
            className="mb-4 col-12"
          />
        </div>
        <div className="row">
          <RegularInput
            formik={formik}
            name="company"
            label="Company Name"
            className="mb-4 col-12"
          />
        </div>
        <div className="row">
          <RegularInput
            type="date"
            formik={formik}
            name="startDate"
            label="Start Year"
            className="mb-4 col-6"
          />
          <RegularInput
            type="date"
            formik={formik}
            name="endDate"
            label="End Year"
            className="mb-4 col-6"
          />
        </div>
        <div className="row">
          <TextArea
            rows={4}
            formik={formik}
            name="description"
            label="Description"
            className="mb-4 col-12"
          />
        </div>
        <div className="row">
          <div className="col-auto ml-auto pb-4">
            <button type="submit" className="btn-right btn btn-primary">
              Add Experience
            </button>
          </div>
        </div>
      </form>
    </ModalFrame>
  );
}

export default ExperienceModal;
