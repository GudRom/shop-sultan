import { NavLink } from "react-router-dom";
import YellowBtn from "../../../UI/YellowBtn/YellowBtn";
import logo from "../../../../images/utils/logo.svg";
import catalogImg from "../../../../images/utils/catalog.svg";
import downloadImg from "../../../../images/utils/download.svg";
import SearchElement from "../../../UI/SearchElement/SearchElement";

import "./MainPart.scss";
import { useAppSelector } from "../../../../store/hook";
import { START_PAGE_PATH } from "../../../../utils/config";

interface Props {}

const MainPart = (props: Props) => {
  const goods = useAppSelector((state) => state.goods.goods);
  const basketGoods = goods.filter((good) => good.isAdded === true);
  let sumBasket = useAppSelector((state) => state.goods.sumBasket);
  const amountGoods = basketGoods.reduce(
    (accum, current) => accum + current.countGoods,
    0
  );
  const search = (value: string): void => {
    return;
  };

  return (
    <div className="main-part">
      <button className="main-part__menu-btn"></button>
      <NavLink to={START_PAGE_PATH}>
        <img className="main-part__logo" src={logo} alt="логотип" />
      </NavLink>

      <div className="main-part__catalog-box">
        <div className="main-part__btn-catalog">
          <YellowBtn text={"Каталог"} url={catalogImg} />
        </div>
        <SearchElement addFilteredElements={search} />
      </div>
      <div className="main-part__call-info">
        <div className="main-part__call-box">
          <a className="main-part__text" href="tel:+77774900091">
            +7 (777) 490-00-91
          </a>
          <p className="main-part__sub">время работы: 9:00-20:00</p>
          <p className="main-part__callback">Заказать звонок</p>
        </div>
        <div className="main-part__operator">
          <div className="main-part__light"></div>
        </div>
      </div>
      <div className="main-part__line"></div>
      <div className="main-part__btn-pricelist">
        <YellowBtn text={"Прайс-лист"} url={downloadImg} />
      </div>
      <div className="main-part__line"></div>
      <div className="main-part__basket-info">
        <NavLink className="main-part__basket-link" to="basket">
          <div className="main-part__basket">
            <div className="main-part__amount-circle">
              <p className="main-part__amount">{amountGoods}</p>
            </div>
          </div>
        </NavLink>
        <div className="main-part__total">
          <p className="main-part__sub">Корзина</p>
          <p className="main-part__text">{sumBasket.toFixed(2)} &#8376;</p>
        </div>
      </div>
    </div>
  );
};

export default MainPart;
