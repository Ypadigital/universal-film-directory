import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useCanCallWeb3Method from "../../../hooks/useCanCallWeb3Method";
import toast from "../../../utils/toast";
import { apiErrorMessage } from "../../../utils/handleAPIErrors";
import { RegularInput } from "../../Common/RegularInput";
import { Select } from "../../Common/Select";
import {
  countries,
  getPayloadForProfileEdit,
  getRandomKey,
  languages,
} from "../../../utils/helpers";
import { HTMLInput } from "../../Common/HTMLInput";
import EducationTable from "../../Common/EducationTable";
import ExperienceTable from "../../Common/ExperiencesTable";
import { createImage } from "../../../services/imagesService";
import { editUserProfile } from "../../../services/userService";

const validationSchema = Yup.object({
  firstName: Yup.string().trim().min(2).label("First Name"),
  lastName: Yup.string().trim().min(2).label("Last Name"),
  image: Yup.string().label("Profile Picture"),
  email: Yup.string().email(),
  description: Yup.string().trim().min(2).label("Description"),
  overview: Yup.string().trim().min(2).label("Overview"),
  categories: Yup.array().label("Categories"),
  languages: Yup.array().label("Languages"),
  education: Yup.array().label("Education"),
  experiences: Yup.array().label("Experiences"),
  location: Yup.string().trim().min(2).label("Location"),
  selectedCategory: Yup.string(),
  selectedLanguage: Yup.string(),
  facebook: Yup.string().trim(),
  twitter: Yup.string().trim(),
  linkedIn: Yup.string().trim(),
  instagram: Yup.string().trim(),
});

export default function SettingsForm({ user, categories }) {
  const { canRunWeb3, cannotCallWeb3Error } = useCanCallWeb3Method();
  const addCategory = () => {
    const selectedCategory = formik.values.selectedCategory;
    const categories = formik.values.categories;
    if (selectedCategory && !categories.includes(selectedCategory)) {
      formik.setFieldValue("categories", [...categories, selectedCategory]);
    }
  };

  const removeCategory = (category) => {
    const categories = formik.values.categories;
    const newCategories = categories.filter((c) => c !== category);
    formik.setFieldValue("categories", newCategories);
  };

  const addLanguage = () => {
    const selectedLanguage = formik.values.selectedLanguage;
    const languages = formik.values.languages;
    if (selectedLanguage && !languages.includes(selectedLanguage)) {
      formik.setFieldValue("languages", [...languages, selectedLanguage]);
    }
  };

  const removeLanguage = (language) => {
    const languages = formik.values.languages;
    const newLanguages = languages.filter((l) => l !== language);
    formik.setFieldValue("languages", newLanguages);
  };

  const addEducation = (values) => {
    formik.setFieldValue("education", [...formik.values.education, values]);
  };

  const removeEducation = (index) => {
    const education = formik.values.education;
    const newEducation = education.filter((e, i) => i !== index);
    formik.setFieldValue("education", newEducation);
  };

  const addExperience = (values) => {
    formik.setFieldValue("experiences", [...formik.values.experiences, values]);
  };

  const removeExperience = (index) => {
    const experiences = formik.values.experiences;
    const newExperiences = experiences.filter((e, i) => i !== index);
    formik.setFieldValue("experiences", newExperiences);
  };

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    image: user.image,
    description: user.description,
    overview: user.overview,
    location: user.location,
    categories: user.categories.map((c) => c.name),
    languages: user.languages,
    education: user.education,
    experiences: user.experiences,
    selectedCategory: "",
    selectedLanguage: "",
    facebook: user.socialLinks.facebook,
    twitter: user.socialLinks.twitter,
    linkedIn: user.socialLinks.linkedIn,
    instagram: user.socialLinks.instagram,
  };
  const handleSubmit = async (values) => {
    if (!canRunWeb3) return toast.error(cannotCallWeb3Error);
    const toastId = toast.loading("Updating User Profile...");
    try {
      let payload = getPayloadForProfileEdit(values, categories);

      await editUserProfile(payload);
      toast.update(toastId, "User's Profile was updated Successfully");
    } catch (error) {
      const message = apiErrorMessage(error);
      toast.update(toastId, message, { type: "error" });
    }
  };

  const uploadImage = async (e) => {
    const toastId = toast.loading("Uploading new image...");
    try {
      const file = e.target.files[0];
      const upload = await createImage({ file });
      const url = upload.data.data.url;
      formik.setFieldValue("image", url);
      toast.update(toastId, "Image was uploaded Successfully");
    } catch (error) {
      const message = apiErrorMessage(error);
      toast.update(toastId, message, { type: "error" });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const chosenCategories = formik.values.categories;
  const chosenLanguages = formik.values.languages;

  return (
    <div className="setting-content">
      <form onSubmit={formik.handleSubmit}>
        <div className="card">
          <div className="pro-head">
            <h3 className="pro-title without-border mb-0">Profile Basics</h3>
          </div>
          <div className="pro-body">
            <div className="row">
              <div className="form-group col-md-6">
                <RegularInput
                  formik={formik}
                  name={"firstName"}
                  label="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <RegularInput
                  formik={formik}
                  name={"lastName"}
                  label="Last Name"
                />
              </div>
              <div className="form-group col-md-6">
                <RegularInput
                  formik={formik}
                  name={"email"}
                  label="Email Address"
                />
              </div>
              <div className="form-group col-md-6">
                <RegularInput
                  formik={formik}
                  name={"description"}
                  label="Tell the world what you do"
                />
              </div>
            </div>
            <div className="form-row pro-pad pt-0">
              <div className="form-group col-md-6 pro-pic">
                <label>Profile Picture</label>
                <div className="d-flex gap-10 align-items-center">
                  <div className="upload-images">
                    <img src={formik.values["image"]} alt="user" />
                    <div className="btn btn-icon btn-danger btn-sm">
                      <i className="far fa-trash-alt" />
                    </div>
                  </div>
                  <label className="file-upload image-upbtn ms-3">
                    Change Image
                    <input onChange={uploadImage} type="file" />
                  </label>
                </div>
                <p>Image size 300*300</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="pro-head">
            <h3 className="pro-title without-border mb-0">Location</h3>
          </div>
          <div className="pro-body">
            <div className="row">
              <div className="form-group col-md-6">
                <Select name="location" formik={formik} label="Country">
                  {countries.map((country) => (
                    <option key={getRandomKey()} value={country}>
                      {country}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 col-xl-6">
            <div className="card">
              <div className="pro-head">
                <h3 className="pro-title without-border mb-0">
                  Categories you fit in?
                </h3>
              </div>
              <div className="pro-body  lang-info">
                <div className="row align-items-center mb-4">
                  <div className="col-8">
                    <Select name={"selectedCategory"} formik={formik} label="">
                      {categories.map((category) => (
                        <option key={getRandomKey()} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="col-4">
                    <button
                      type="button"
                      onClick={addCategory}
                      className="btn w-100 fund-btn add-award"
                    >
                      Add
                    </button>
                  </div>
                </div>
                {chosenCategories.map((category, index) => (
                  <div
                    key={getRandomKey()}
                    className="form-row align-items-center lang-cont"
                  >
                    <div className="form-group col-md">
                      <span className="pl-2">{category}</span>
                    </div>

                    <div className="form-group col-md-2">
                      <button
                        onClick={() => removeCategory(category)}
                        className="btn trash-icon"
                      >
                        <i className="far fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-6">
            <div className="card">
              <div className="pro-head">
                <h3 className="pro-title without-border mb-0">
                  Spoken Languages?
                </h3>
              </div>
              <div className="pro-body  lang-info">
                <div className="row align-items-center mb-4">
                  <div className="col-8">
                    <Select name={"selectedLanguage"} formik={formik} label="">
                      {languages.map((language) => (
                        <option key={getRandomKey()} value={language}>
                          {language}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="col-4">
                    <button
                      type="button"
                      onClick={addLanguage}
                      className="btn w-100 fund-btn add-award"
                    >
                      Add
                    </button>
                  </div>
                </div>
                {chosenLanguages.map((language, index) => (
                  <div
                    key={getRandomKey()}
                    className="form-row align-items-center lang-cont"
                  >
                    <div className="form-group col-md">
                      <span className="pl-2">{language}</span>
                    </div>

                    <div className="form-group col-md-2">
                      <button
                        onClick={() => removeLanguage(language)}
                        className="btn trash-icon"
                      >
                        <i className="far fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <HTMLInput formik={formik} name={"overview"} label="Overview" />
        </div>

        <div className="card">
          <div className="pro-head">
            <h3 className="pro-title without-border mb-0">Social Links</h3>
          </div>
          <div className="pro-body">
            <div className="row">
              <div className="form-group col-md-6">
                <RegularInput
                  name="facebook"
                  formik={formik}
                  label="Facebook"
                />
              </div>
              <div className="form-group col-md-6">
                <RegularInput name="twitter" formik={formik} label="Twitter" />
              </div>
              <div className="form-group col-md-6">
                <RegularInput
                  name="linkedIn"
                  formik={formik}
                  label="Linkedin"
                />
              </div>
              <div className="form-group col-md-6">
                <RegularInput
                  name="instagram"
                  formik={formik}
                  label="Instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <EducationTable
        education={formik.values.education}
        addEducation={addEducation}
        removeEducation={removeEducation}
      />
      <ExperienceTable
        experiences={formik.values.experiences}
        addExperience={addExperience}
        removeExperience={removeExperience}
      />
      <div className="card text-end">
        <div className="pro-body">
          <button className="btn btn-secondary click-btn btn-plan">
            Cancel
          </button>
          &nbsp;
          <button
            onClick={formik.handleSubmit}
            className="btn btn-primary click-btn btn-plan"
            type="submit"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
