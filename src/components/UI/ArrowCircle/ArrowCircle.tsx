import React from "react";
import "./ArrowCircle.scss";
import arrow from "../../../images/utils/arrow-black.svg";

interface Props {}

const ArrowCircle = (props: Props) => {
  return (
    <div className="arrow-circle">
      <img src={arrow} alt="" className="arrow-circle__img" />
    </div>
  );
};

export default ArrowCircle;
