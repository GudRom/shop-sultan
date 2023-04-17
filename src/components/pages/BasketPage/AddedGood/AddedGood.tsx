import React, { FC } from "react";
import Counter from "../../../common/Counter/Counter";
import { Goods } from "../../../common/Interfaces/IGoods";
import DeleteButton from "../../../UI/DeleteButton/DeleteButton";
import "./AddedGood.scss";
import { useAppDispatch } from "../../../../store/hook";
import {
  clearCount,
  setIsAddedFalse,
} from "../../../../store/slices/goodSlice";

interface Props {
  good: Goods;
}

const AddedGood: FC<Props> = ({ good }) => {
  const dispatch = useAppDispatch();
  const clear = () => {
    if (good.id) {
      dispatch(setIsAddedFalse(good.id));
      dispatch(clearCount(good.id));
    }
  };
  return (
    <div className="added-good">
      <div className="added-good__good-box">
        <div className="added-good__img-flex">
          <img className="added-good__img" src={good.good.url_img} alt="" />
        </div>
        <div className="added-good__info">
          <div className="added-good__weight-box">
            <div
              className={`added-good__type-weight ${
                good.good.type_weight === "мл"
                  ? "added-good__type-weight_bottle"
                  : "added-good__type-weight_box"
              }`}
            ></div>
            <p className="added-good__weight">
              {good.good.weight} {good.good.type_weight}
            </p>
          </div>
          <p className="added-good__link" title={good.good.name}>
            {good.good.name}
          </p>
          <p className="added-good__description">{good.good.description}</p>
        </div>
      </div>
      <div className="added-good__action-box">
        <ul className="added-good__list">
          <li className="added-good__list-item">
            <Counter id={good.id} />
          </li>
          <li className="added-good__list-item">
            <p className="added-good__price">{good.good.cost}&nbsp;&#8376;</p>
          </li>
        </ul>
        <DeleteButton actionFunction={clear} />
      </div>
    </div>
  );
};

export default AddedGood;
