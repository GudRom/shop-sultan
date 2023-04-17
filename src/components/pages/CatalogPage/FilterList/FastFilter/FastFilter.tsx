import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/hook";
import { setCurrentGoodType } from "../../../../../store/slices/filterSlice";

interface Props {
  type?: string;
}

const FastFilter: FC<Props> = ({ type }) => {
  const dispatch = useAppDispatch();
  const currentGoodType = useAppSelector(
    (state) => state.filters.currentGoodType
  );
  const toggleTypeClick = () => {
    dispatch(setCurrentGoodType(type));
  };
  return (
    <li className="filter-list__item">
      <button
        className={`filter-list__btn ${
          currentGoodType === type ? "filter-list__btn_checked" : null
        }`}
        onClick={toggleTypeClick}
      >
        {type}
      </button>
    </li>
  );
};

export default FastFilter;
