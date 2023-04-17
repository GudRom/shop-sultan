import { FC } from "react";
import { useAppSelector } from "../../../../store/hook";
import "./FilterList.scss";
import FastFilter from "./FastFilter/FastFilter";

interface Props {}

const FilterList: FC<Props> = () => {
  const goodTypes = useAppSelector((state) => state.goods.goods)
    .map((good) => {
      return good.good.type_product;
    })
    .flat();

  const uniqTypes = [...new Set(goodTypes)];
  return (
    <ul className="filter-list">
      {uniqTypes &&
        uniqTypes.map((el, index) => {
          return <FastFilter key={index.toString()} type={el} />;
        })}
    </ul>
  );
};

export default FilterList;
