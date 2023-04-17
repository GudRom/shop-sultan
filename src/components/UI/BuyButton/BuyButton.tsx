import { memo } from "react";
import { useAppDispatch } from "../../../store/hook";
import { setIsAddedTrue } from "../../../store/slices/goodSlice";
import { Goods } from "../../common/Interfaces/IGoods";
import "./BuyButton.scss";
interface Props {
  good: Goods;
  fsize: string;
}

const BuyButton = memo(({ good, fsize }: Props) => {
  const dispatch = useAppDispatch();
  const addGoodInBasket = () => {
    dispatch(setIsAddedTrue(good.id));
  };
  return (
    <button
      className="buy-btn"
      onClick={addGoodInBasket}
      style={{ fontSize: fsize }}
    >
      В&nbsp;корзину
      <div className="buy-btn__img"></div>
    </button>
  );
});

export default BuyButton;
