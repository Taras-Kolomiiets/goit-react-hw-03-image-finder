import React from "react";
import { useSelector } from "react-redux";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import classes from "./imageGallery.module.css";

const ImageGallery = () => {
  const images = useSelector((state) => state.images.images);
  return (
    <ul className={classes.ImageGallery}>
      {images.map((image) => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </ul>
  );
};

export default ImageGallery;
