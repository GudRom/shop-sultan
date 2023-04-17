import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { clearCount, setIsAddedFalse } from "../../../store/slices/goodSlice";
import AddedGood from "./AddedGood/AddedGood";
import "./BasketPage.scss";

interface Props {
  openPopup: () => void;
}

const BasketPage: FC<Props> = ({ openPopup }) => {
  const goods = useAppSelector((state) => state.goods.goods);
  const basketGoods = goods.filter((good) => good.isAdded === true);
  let sumBasket = useAppSelector((state) => state.goods.sumBasket);

  const dispatch = useAppDispatch();
  const clear = (): void => {
    basketGoods.forEach((good) => {
      dispatch(setIsAddedFalse(good.id));
      dispatch(clearCount(good.id));
    });
  };

  const placeOrder = (): void => {
    clear();
    openPopup();
  };

  return (
    <section className="basket">
      <h2 className="basket__title">Корзина</h2>
      {basketGoods.length !== 0 ? (
        <ul className="basket__list">
          {basketGoods.map((good) => {
            return (
              <li className="basket__list-item" key={good.id.toString()}>
                <AddedGood good={good} />
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 className="basket__text">Пока что пусто</h3>
      )}

      <div className="basket__total-box">
        <button className="basket__buy-btn" onClick={placeOrder}>
          Оформить заказ
        </button>
        <p className="basket__total">{sumBasket.toFixed(2)}&nbsp;&#8376;</p>
      </div>
    </section>
  );
};

export default BasketPage;
