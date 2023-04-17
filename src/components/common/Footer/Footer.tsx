import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/utils/logo-footer.svg";
import downloadImg from "../../../images/utils/download.svg";
import visaImg from "../../../images/utils/visa.svg";
import masterImg from "../../../images/utils/mastercard.svg";
import YellowBtn from "../../UI/YellowBtn/YellowBtn";
import "./Footer.scss";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__company-box">
          <img src={logo} alt="" className="footer__logo" />
          <p className="footer__description">
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            в Кокчетаве и Акмолинской области
          </p>
          <form action="" className="footer__form">
            <p className="footer__form-text">Подпишись на скидки и акции</p>
            <div className="footer__input-box">
              <input
                type="text"
                className="footer__input"
                placeholder="Введите ваш E-mail"
              />
              <button className="footer__send-btn"></button>
            </div>
          </form>
        </div>
        <ul className="footer__block-list">
          <li className="footer__block-list-item">
            <nav className="footer__navigation">
              <p className="footer__block-name">Меню сайта:</p>
              <ul className="footer__nav-list">
                <li className="footer__nav-list-item">
                  <Link to="" className="footer__nav-link">
                    О компании
                  </Link>
                </li>
                <li className="footer__nav-list-item">
                  <Link to="" className="footer__nav-link">
                    Доставка и оплата
                  </Link>
                </li>
                <li className="footer__nav-list-item">
                  <Link to="" className="footer__nav-link">
                    Возврат
                  </Link>
                </li>
                <li className="footer__nav-list-item">
                  <Link to="" className="footer__nav-link">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </li>
          <li className="footer__block-list-item">
            <nav className="footer__navigation">
              <p className="footer__block-name">Категории:</p>
              <ul className="footer__nav-list">
                <li className="footer__nav-list-item">
                  <Link to="" className="footer__nav-link">
                    Бытовая химия
                  </Link>
                </li>
                <li className="footer__nav-list-item">
                  <Link to="" className="footer__nav-link">
                    Косметика и гигиена
                  </Link>
                </li>
                <li className="footer__nav-list-item">
                  <Link to="" className="footer__nav-link">
                    Товары для дома
                  </Link>
                </li>
                <li className="footer__nav-list-item">
                  <Link to="" className="footer__nav-link">
                    Товары для детей и мам
                  </Link>
                </li>
                <li className="footer__nav-list-item">
                  <Link to="" className="footer__nav-link">
                    Посуда
                  </Link>
                </li>
              </ul>
            </nav>
          </li>
          <li className="footer__block-list-item">
            <p className="footer__block-name footer__block-name_invisible">Скачать прайс-лист:</p>
            <div className="footer__btn-pricelist">
              <YellowBtn text={"Прайс-лист"} url={downloadImg} />
            </div>
            <div className="footer__social-block">
              <p className="footer__text">Связь в мессенджерах:</p>
              <div className="footer__social-links">
                <a
                  className="footer__link footer__link_whatsapp"
                  href="http://whatsapp.com"
                  title="Перейти в whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                > </a>
                <a
                  className="footer__link footer__link_tg"
                  href="http://telegram.org"
                  title="Перейти в telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                > </a>
              </div>
            </div>
          </li>
          <li className="footer__block-list-item">
            <p className="footer__block-name">Контакты:</p>
            <div className="footer__call-box">
              <a className="footer__contact-text" href="tel:+77774900091">
                +7 (777) 490-00-91
              </a>
              <p className="footer__sub">время работы: 9:00-20:00</p>
              <p className="footer__callback">Заказать звонок</p>
              <a
                href="mailto:opt.sultan@mail.ru"
                className="footer__contact-text"
              >
                opt.sultan@mail.ru
              </a>
              <p className="footer__sub">На связи в любое время</p>
            </div>
            <div className="footer__pay-list">
              <img
                src={visaImg}
                alt="виза"
                className="footer__img footer__img_visa"
              />
              <img
                src={masterImg}
                alt="мастеркард"
                className="footer__img footer__img_master"
              />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
