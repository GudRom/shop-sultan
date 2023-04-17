import "./Header.scss";
import MainPart from "./MainPart/MainPart";
import TopPart from "./TopPart/TopPart";
interface Props {}

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <TopPart />
      </div>
      <div className="header__wrapper">
        <MainPart />
      </div>
      <div className="header__wrapper">
        <ul className="header__btn-list-mobile">
          <li className="header__list-element">
            <button className="header__btn">
              <div className="header__btn-img header__btn-img_catalog"></div>
              <p className="header__btn-text">Каталог</p>
            </button>
          </li>
          <li className="header__list-element">
            <button className="header__btn">
              <div className="header__btn-img header__btn-img_search"></div>
              <p className="header__btn-text">Поиск</p>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
