import React, { memo } from "react";
import "./YellowBtn.scss";

interface Props {
  text: string;
  url?: string;
}

const YellowBtn = memo((props: Props) => {
  return (
    <button className="yellow-btn">
      <p className="yellow-btn__text">{props.text}</p>
      {props.url ? (
        <div
          className="yellow-btn__icon"
          style={{ backgroundImage: `url(${props.url})` }}
        ></div>
      ) : null}
    </button>
  );
});

export default YellowBtn;
