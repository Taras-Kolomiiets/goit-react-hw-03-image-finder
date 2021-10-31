import React from "react";
import classes from "./imageGalleryItem.module.css";

const ImageGalleryItem = () => {
  return (
    <li className={classes.ImageGalleryItem}>
      <img src="" alt="" className={classes.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
