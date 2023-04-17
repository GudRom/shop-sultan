import React from "react";
import img from "../../../../images/utils/double-check.svg";
import "./SuccessPopup.scss";
interface Props {}

const SuccessPopup = (props: Props) => {
  return (
    <div className="success-popup">
      <img className="success-popup__img" src={img} alt="" />
      <p className="success-popup__text">Спасибо за заказ</p>
      <p className="success-popup__sub">
        Наш менеджер свяжется с вами в ближайшее время
      </p>
    </div>
  );
};

export default SuccessPopup;
