import { FC, memo } from "react";
import "./Pagination.scss";
import { useAppSelector } from "../../../../store/hook";
import { GOODS_PER_PAGE } from "../../../../utils/config";

interface Props {
  setNextPage: () => void;
  setPrevPage: () => void;
  currentPage: number;
}

const Pagination: FC<Props> = memo(
  ({ setNextPage, setPrevPage, currentPage }) => {
    const goods = useAppSelector((state) => state.goods.filteredGoods);
    const countPage = Math.ceil(goods.length / GOODS_PER_PAGE);
    const countPageArr = Array.from({ length: countPage }, (_, i) => i + 1);
    return (
      <div className="pagination">
        <button
          className={`pagination__btn pagination__btn_prev ${
            currentPage === countPageArr[0] ? "pagination__btn_disable" : null
          }`}
          onClick={setPrevPage}
          disabled={currentPage === countPageArr[0]}
        ></button>
        <ul className="pagination__list">
          {countPageArr.map((el) => {
            return (
              <li
                className={`pagination__list-item ${
                  currentPage === el ? "pagination__list-item_active" : null
                }`}
                key={el.toString()}
              >
                {el}
              </li>
            );
          })}
        </ul>
        <button
          className={`pagination__btn ${
            currentPage === countPageArr.length
              ? "pagination__btn_disable"
              : null
          }`}
          onClick={setNextPage}
          disabled={currentPage === countPageArr.length}
        ></button>
      </div>
    );
  }
);

export default Pagination;
