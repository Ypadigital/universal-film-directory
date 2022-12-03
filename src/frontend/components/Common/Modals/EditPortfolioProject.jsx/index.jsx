import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "../../../../utils/toast";
import { RegularInput } from "../../RegularInput";
import { useEffect } from "react";
import { HTMLInput } from "../../HTMLInput";
import { DragAndDropInput } from "../../../DragAndDropInput";
import useCanCallWeb3Method from "../../../../hooks/useCanCallWeb3Method";
import { UpdateService } from "../../../../services/serviceService";
import { apiErrorMessage } from "../../../../utils/handleAPIErrors";
import { createImage } from "../../../../services/imagesService";
import { omit } from "lodash";
import { useDataContext } from "../../../../contexts/dataContext";
import { Select } from "../../Select";
import ModalFrame from "../ModalFrame";

const validationSchema = Yup.object({
  title: Yup.string().required().label("Title"),
  price: Yup.number().moreThan(0).required().label("Price"),
  type: Yup.string()
    .required()
    .oneOf(["hour", "month", "day", "week"])
    .label("Price Type"),
  link: Yup.string().label("Link"),
  overview: Yup.string().required().label("Description"),
  images: Yup.array().label("Images"),
  categoryId: Yup.string().required().label("Category"),
});

function EditPortfolioProject({
  selectedService,
  isActive,
  setIsActive,
  onSetSelectedService,
}) {
  let { categories } = useDataContext();

  categories = categories.data || [];

  const { canRunWeb3, cannotCallWeb3Error } = useCanCallWeb3Method();

  const [files, setFiles] = useState([]);
  const initialValues = {
    title: selectedService.title,
    price: selectedService.rate.amount,
    type: selectedService.rate.type,
    link: selectedService.link,
    overview: selectedService.overview,
    images: selectedService.images,
    categoryId: selectedService.categoryId,
  };

  const handleSubmit = (values) => {
    (async () => {
      values.rate = {
        amount: values.price,
        type: values.type,
      };
      const payload = omit(values, ["price", "type"]);
      payload.id = selectedService._id;
      if (!canRunWeb3) return toast.error(cannotCallWeb3Error);
      const toastId = toast.loading("Updating portfolio...");
      formik.resetForm();
      try {
        const service = await UpdateService(payload);
        console.log(service);
        toast.update(toastId, "Portfolio was updated Successfully");
      } catch (error) {
        const message = apiErrorMessage(error);
        toast.update(toastId, message, { type: "error" });
      }
    })();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (files.length > formik.values.images.length) {
      (async () => {
        const toastId = toast.loading("Uploading new image...");
        try {
          const file = files[files.length - 1];
          const upload = await createImage({ file });
          const url = upload.data.data.url;
          formik.setFieldValue("images", [...formik.values.images, url]);
          console.log(url);
          setIsActive(false);
          toast.update(toastId, "Image was uploaded Successfully");
        } catch (error) {
          const message = apiErrorMessage(error);
          toast.update(toastId, message, { type: "error" });
        }
      })();
    }
  }, [files, formik, setIsActive]);

  const handleRemoveImage = (index) => {
    const newImages = [...formik.values.images];
    newImages.splice(index, 1);
    formik.setFieldValue("images", newImages);
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (selectedService && !isActive) {
      onSetSelectedService(null);
    }
  }, [isActive, onSetSelectedService, selectedService]);
  useEffect(() => {
    console.log(formik.values.images);
  }, [formik.values.images]);

  if (!selectedService) return "";
  return (
    <ModalFrame isActive={isActive} setIsActive={setIsActive}>
      <form onSubmit={formik.handleSubmit}>
        <DragAndDropInput
          images={formik.values.images}
          name={"files"}
          allowMultiple={true}
          setFiles={setFiles}
          onRemoveImage={handleRemoveImage}
        />
        <RegularInput
          name={"title"}
          label="Title"
          formik={formik}
          placeholder="For example: Visual Effects Design"
          className={"mb-4"}
        />
        {!!categories.length ? (
          <Select
            label={"Category"}
            formik={formik}
            name="categoryId"
            className={"mb-4"}
            onChange={formik.handleChange("type")}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Select>
        ) : (
          <p>No categories found</p>
        )}

        <HTMLInput
          name={"overview"}
          label="Description"
          formik={formik}
          onChange={formik.handleChange("overview")}
          value={formik.values.overview}
          placeholder="For example: Visual Effects Design"
          className={"mb-4"}
        />

        <div className="form-group">
          <div className="row mb-4">
            <div className="col-md-8">
              <RegularInput
                label={"Price ($)"}
                type="tel"
                name="price"
                formik={formik}
                placeholder="500"
              />
            </div>
            <div className="col-md-4">
              <Select
                label={"Price Type"}
                name="type"
                formik={formik}
                className=""
              >
                <option value={"hour"}>Per Hour</option>
                <option value={"day"}>Per Day</option>
                <option value={"week"}>Per Week</option>
                <option value={"month"}>Per Month</option>
              </Select>
            </div>
          </div>
        </div>
        <RegularInput
          label="Link"
          className={"mb-5"}
          name="link"
          formik={formik}
          placeholder="https://www.example.com"
        />

        <div className="submit-section text-right">
          <button type="submit" className="btn btn-primary submit-btn">
            Submit
          </button>
        </div>
      </form>
    </ModalFrame>
  );
}

export default EditPortfolioProject;
