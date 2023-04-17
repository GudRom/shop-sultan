import React from "react";
import { Link } from "react-router-dom";
import locationImg from "../../../../images/utils/location.svg";
import mailImg from "../../../../images/utils/mail.svg";
import "./TopPart.scss";

interface Props {}

const TopPart = (props: Props) => {
  return (
    <div className="top-part">
      <ul className="top-part__contacts">
        <li className="top-part__contact">
          <div className="top-part__link-box">
            <img className="top-part__img" src={locationImg} alt="адрес" />
            <div className="top-part__text-box">
              <a
                href="https://yandex.ru/maps/-/CCUSuLWjWC"
                target="_blank"
                rel="noopener noreferrer"
                className="top-part__link"
              >
                г. Кокчетав, ул. Ж. Ташенова 129Б
              </a>
              <p className="top-part__text">(Рынок Восточный)</p>
            </div>
          </div>
        </li>
        <li className="top-part__contact">
          <div className="top-part__link-box">
            <img className="top-part__img" src={mailImg} alt="почта" />
            <div className="top-part__text-box">
              <a href="mailto:opt.sultan@mail.ru" className="top-part__link">
                opt.sultan@mail.ru
              </a>
              <p className="top-part__text">На связи в любое время</p>
            </div>
          </div>
        </li>
      </ul>
      <nav className="top-part__navigation">
        <ul className="top-part__nav-list">
          <li className="top-part__nav-list-item">
            <Link className="top-part__nav-link" to={"about"}>
              О&nbsp;компании
            </Link>
          </li>
          <li className="top-part__nav-list-item">
            <Link className="top-part__nav-link" to={"delivery"}>
              Доставка и оплата
            </Link>
          </li>
          <li className="top-part__nav-list-item">
            <Link className="top-part__nav-link" to={"vozvrat"}>
              Возврат
            </Link>
          </li>
          <li className="top-part__nav-list-item">
            <Link className="top-part__nav-link" to={"contacts"}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopPart;
