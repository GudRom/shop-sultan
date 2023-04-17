import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { decreaseCount, increaseCount } from "../../../store/slices/goodSlice";
import "./Counter.scss";

interface Props {
  id: number;
}

const Counter = memo(({ id }: Props) => {
  const good = useAppSelector((state) => state.goods.goods);
  let count = good.find((good) => good.id === id)?.countGoods;
  const dispatch = useAppDispatch();
  const increase = (): void => {
    dispatch(increaseCount(id));
  };
  const decrease = (): void => {
    dispatch(decreaseCount(id));
  };
  return (
    <div className="counter">
      <button className="counter__btn" onClick={decrease}>
        -
      </button>
      <span className="counter__count">{count}</span>
      <button className="counter__btn" onClick={increase}>
        +
      </button>
    </div>
  );
});

export default Counter;
