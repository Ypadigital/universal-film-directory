import React, { useEffect } from "react";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { getFileUrl, getRandomKey } from "../../utils/helpers";
import toast from "../../utils/toast";
import BigUploadIcon from "../Icons/BigUploadIcon";
import CloseIcon from "../Icons/CloseIcon";
// import { BigUploadIcon } from "../../assets/images";

import styles from "./drag-and-drop-input.module.css";

function DragAndDropInput({
  name,
  allowMultiple,
  setFiles,
  onRemoveImage,
  images,
}) {
  const handleAddFile = (file) => {
    if (images.length === 3) return toast.error("You can only upload 3 images");
    setFiles((prev) => [...prev, file]);
  };

  const { isDraggingOver, setIsDraggingOver, onDragOver, onDragLeave } =
    useDragAndDrop();

  const handleFileInput = (file) => {
    if (!file) return;
    const url = getFileUrl(file);
    if (file.size > 5000000) return toast.error("File size is too large");

    handleAddFile(file);
  };

  const onDrop = (e) => {
    e.preventDefault();

    setIsDraggingOver(false);

    const file = e?.dataTransfer?.files[0];

    if (!file.type.includes("image")) toast.error("File must be an image");

    handleFileInput(file);
  };

  const fileSelect = (e) => {
    let file = e?.currentTarget?.files[0];
    if (!file.type.includes("image")) toast.error("File must be an image");

    handleFileInput(file);
  };

  let containerClass = `${styles["container"]}`;
  if (isDraggingOver) containerClass += ` ${styles["active"]}`;

  return (
    <>
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={containerClass}
      >
        <label>
          <input
            multiple
            type="file"
            accept="image/*"
            name={name}
            id={name}
            className="d-none"
            onChange={fileSelect}
          />
          <p>Upload Images</p>
          <BigUploadIcon />
          <p className="text-xs mt-3">PNG, GIF, WEBP, MP4 or MP3. Max 5mb.</p>
        </label>
      </div>
      <div className={`${styles["images"]}`}>
        {images.map((image, index) => (
          <div key={getRandomKey()} className={`${styles["image-card"]}`}>
            <img alt="" src={image} />
            <div
              onClick={() => onRemoveImage(index)}
              className={`${styles["delete"]}`}
            >
              <CloseIcon />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export { DragAndDropInput };
