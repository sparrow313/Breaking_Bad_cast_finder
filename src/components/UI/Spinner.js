import React from "react";
import loadImg from "../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={loadImg}
      alt="Loading"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
