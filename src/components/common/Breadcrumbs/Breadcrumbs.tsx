import { useLocation, useNavigate } from "react-router-dom";
import ArrowCircle from "../../UI/ArrowCircle/ArrowCircle";
import "./Breadcrumbs.scss";
import { FC } from "react";

interface Props {}

const Breadcrumbs: FC<Props> = () => {
  const location = useLocation();

  function setCurrentLocation(): string {
    let currentLocation = "";
    switch (location.pathname) {
      case "/":
        currentLocation = "Каталог";
        break;
      case "/basket":
        currentLocation = "Корзина";
        break;
    }
    return currentLocation;
  }

  return (
    <>
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <p className="breadcrumbs__location">Главная</p>
        </li>
        <li className="breadcrumbs__item">
          <p className="breadcrumbs__location">{setCurrentLocation()}</p>
        </li>
      </ul>
      <button className="back-btn">
        <ArrowCircle />
        <p className="back-btn__text">назад</p>
      </button>
    </>
  );
};

export default Breadcrumbs;
