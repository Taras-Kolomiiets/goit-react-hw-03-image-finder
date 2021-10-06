import React from "react";
import classes from "./imageGalleryItem.module.css";

const ImageGalleryItem = (props) => {
  console.log(props);
  return (
    <li className={classes.ImageGalleryItem}>
      <img
        src={props.image.webformatURL}
        alt={props.image.tags}
        className={classes.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
