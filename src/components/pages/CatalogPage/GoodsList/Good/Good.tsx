import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../../store/hook";
import {
  addCurrentGood,
  deleteGood,
  setIsLocalStore,
} from "../../../../../store/slices/goodSlice";
import Counter from "../../../../common/Counter/Counter";
import { Goods } from "../../../../common/Interfaces/IGoods";
import BuyButton from "../../../../UI/BuyButton/BuyButton";
import "./Good.scss";
import { GoodElement } from "../../../../common/Interfaces/IGoodElement";
import { FC, memo } from "react";

interface Props {
  good: Goods;
}

const Good: FC<Props> = memo(({ good }) => {
  const dispatch = useAppDispatch();

  const setCurrentGood = () => dispatch(addCurrentGood(good));

  const deleteGoodFromLS = (id: number): void => {
    const filteredGoods = JSON.parse(localStorage.goods).filter(
      (good: GoodElement) => id !== good.barcode
    );
    if (filteredGoods.length > 0) {
      localStorage.goods = JSON.stringify(filteredGoods);
    } else {
      localStorage.removeItem("goods");
      dispatch(setIsLocalStore(false));
    }
  };

  const deleteCard = (): void => {
    dispatch(deleteGood(good.id));
    deleteGoodFromLS(good.id);
  };

  return (
    <div className="good">
      {localStorage.goods ? (
        <div className="good__button-box">
          <button
            onClick={deleteCard}
            className="good__button good__button_delete"
          ></button>
        </div>
      ) : null}
      <img
        className="good__img"
        src={good.good.url_img}
        alt={good.good.name}
        height="194"
      />
      <div className="good__weight-box">
        <div
          className={`good__type-weight ${
            good.good.type_weight === "мл"
              ? "good__type-weight_bottle"
              : "good__type-weight_box"
          }`}
        ></div>
        <p className="good__weight">
          {good.good.weight} {good.good.type_weight}
        </p>
      </div>
      <Link
        className="good__link"
        to={good.good.barcode.toString()}
        title={good.good.name}
        onClick={setCurrentGood}
      >
        {good.good.name}
      </Link>
      <div className="good__info">
        <p className="good__info-text">
          <span className="good__info-type">Штрихкод: </span>
          {good.good.barcode}
        </p>
        <p className="good__info-text">
          <span className="good__info-type">Производитель: </span>
          {good.good.producer}
        </p>
        <p className="good__info-text">
          <span className="good__info-type">Бренд: </span>
          {good.good.brand}
        </p>
      </div>
      <div className="good__buy-box">
        <p className="good__cost">{good.good.cost} &#8376;</p>
        {good.isAdded ? (
          <Counter id={good.id} />
        ) : (
          <div className="good__btn-wrapper">
            <BuyButton fsize={".714rem"} good={good} />
          </div>
        )}
      </div>
    </div>
  );
});

export default Good;
