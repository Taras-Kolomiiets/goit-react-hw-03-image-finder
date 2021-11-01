import React from "react";
import classes from "./button.module.css";

const Button = ({ onLoadMore }) => {
  return (
    <button className={classes.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
