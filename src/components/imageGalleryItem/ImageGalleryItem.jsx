import React from "react";
import classes from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ image, showModal }) => {
  return (
    <li className={classes.ImageGalleryItem} onClick={showModal}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={classes.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
