import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import Good from "./Good/Good";
import { Goods } from "../../../common/Interfaces/IGoods";
import "./GoodsList.scss";
import { FC, useCallback, useEffect, useState } from "react";
import {
  addFilteredGood,
  clearFilteredStore,
} from "../../../../store/slices/goodSlice";
import { GOODS_PER_PAGE } from "../../../../utils/config";
import Pagination from "../Pagination/Pagination";

interface Props {}

const GoodsList: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let endIndex = currentPage * GOODS_PER_PAGE;
  let startIndex = endIndex - GOODS_PER_PAGE;
  const currentGoodType = useAppSelector(
    (state) => state.filters.currentGoodType
  );
  const goods = useAppSelector((state) => state.goods.goods);
  const filteredGoods = useAppSelector((state) => state.goods.filteredGoods);
  const currentGoods = filteredGoods.slice(startIndex, endIndex);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentGoodType) {
      const storeFilteredByType = goods.filter((good) => {
        return good.good.type_product?.includes(currentGoodType);
      });
      setFilteredArr(storeFilteredByType);
    } else {
      setFilteredArr(goods);
    }
  }, [currentGoodType, goods]);

  const setFilteredArr = (arr: Goods[]) => {
    dispatch(clearFilteredStore());
    arr.forEach((el) => {
      dispatch(addFilteredGood(el));
    });
  };

  const setNextPage = useCallback((): void => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  const setPrevPage = useCallback((): void => {
    setCurrentPage(currentPage - 1);
  }, [currentPage]);

  return (
    <div className="goodslist">
      <ul className="goodslist_list">
        {currentGoods.map((good: Goods, index) => {
          return (
            <li className="goodslist__item" key={index.toString()}>
              <Good good={good} />
            </li>
          );
        })}
      </ul>

      <Pagination
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default GoodsList;
