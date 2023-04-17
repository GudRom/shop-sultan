import "./FilterMenu.scss";
import FilterElement from "./FilterElement/FilterElement";
import DeleteButton from "../../../UI/DeleteButton/DeleteButton";
import ArrowCircle from "../../../UI/ArrowCircle/ArrowCircle";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import {
  addFilteredBrands,
  addFilteredProducers,
} from "../../../../store/slices/filterSlice";
import { useFormField } from "../../../common/Hooks/useFormField";
import { useCheckboxFields } from "../../../common/Hooks/useCheckboxFields";
import { addFilteredGood } from "../../../../store/slices/goodSlice";
import { clearFilteredStore } from "../../../../store/slices/goodSlice";
import { FC } from "react";

type evtPrevDef = { preventDefault: () => void };

interface Props {}

const FilterMenu: FC = (props: Props) => {
  const producersList = useAppSelector(
    (state) => state.filters.filteredProducers
  );
  const brandsList = useAppSelector((state) => state.filters.filteredBrands);
  const minCost = useAppSelector((state) => state.goods.minCost);
  const maxCost = useAppSelector((state) => state.goods.maxCost);
  const goodsList = useAppSelector((state) => state.goods.goods);
  const dispatch = useAppDispatch();

  const { formData, onChange, refreshData } = useFormField({
    minCost: 0,
    maxCost: 10000,
  });

  const producers = useCheckboxFields();
  const brands = useCheckboxFields();

  const handleFilterParamsForm = (e: evtPrevDef): void => {
    e.preventDefault();
    dispatch(clearFilteredStore());
    goodsList.forEach((el) => {
      if (
        (el.good.producer && producers.checked.includes(el.good.producer)) ||
        (el.good.brand && brands.checked.includes(el.good.brand)) ||
        (formData.minCost <= el.good.cost && formData.maxCost >= el.good.cost)
      ) {
        console.log(el);
        dispatch(addFilteredGood(el));
      }
    });
  };

  const removeFilterParamsForm = (e: evtPrevDef): void => {
    e.preventDefault();
    refreshData();
  };

  const searchProducers = (value: string): void => {
    dispatch(addFilteredProducers(value));
  };

  const searchBrands = (value: string): void => {
    dispatch(addFilteredBrands(value));
  };

  return (
    <aside className="filter-menu">
      <div className="filter-menu__title-box">
        <p className="filter-menu__title">ПОДБОР ПО ПАРАМЕТРАМ</p>
        <div className="filter-menu__wrapper-btn">
          <ArrowCircle />
        </div>
      </div>
      <form className="filter-form" action="">
        <div className="filter-form__price-box">
          <p className="filter-form__price">
            Цена <span className="filter-form__tenge">&#8376;</span>
          </p>
          <div className="filter-form__price-amount">
            <input
              className="filter-form__price-input"
              type="text"
              name="minCost"
              id="minCost"
              placeholder={minCost.toString()}
              min={minCost}
              value={formData.minCost}
              onChange={onChange}
            />
            <span className="filter-form__separator">-</span>
            <input
              className="filter-form__price-input"
              type="text"
              name="maxCost"
              id="maxCost"
              value={formData.maxCost}
              onChange={onChange}
              placeholder={
                maxCost === 0 ? minCost.toString() : maxCost.toString()
              }
              max={maxCost}
            />
          </div>
        </div>
        <FilterElement
          list={producersList}
          title={"Производитель"}
          addFilteredElements={searchProducers}
          onChange={producers.handleCheck}
        />
        <FilterElement
          list={brandsList}
          title={"Бренд"}
          onChange={brands.handleCheck}
          addFilteredElements={searchBrands}
        />
        <div className="filter-form__button-box">
          <button
            className="filter-form__button-show"
            onClick={handleFilterParamsForm}
          >
            Показать
          </button>
          <DeleteButton actionFunction={removeFilterParamsForm} />
        </div>
      </form>
    </aside>
  );
};

export default FilterMenu;
