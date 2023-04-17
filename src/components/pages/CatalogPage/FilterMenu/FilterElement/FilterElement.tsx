import { memo, useState } from "react";
import SearchElement from "../../../../UI/SearchElement/SearchElement";
import "./FilterElement.scss";
import { IFilter } from "../../../../common/Interfaces/IFilter";
import { COUNT_FILTERS } from "../../../../../utils/config";

interface Props {
  list: IFilter[];
  title: string;
  onChange: (e: any) => void;
  addFilteredElements: (value: string) => void;
}

const FilterElement = memo((props: Props) => {
  const [countShow, setCountShow] = useState(COUNT_FILTERS);

  const handleShowAllBtn = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    if (countShow === COUNT_FILTERS) {
      setCountShow(props.list.length);
    } else {
      setCountShow(COUNT_FILTERS);
    }
  };
  return (
    <div className="filter">
      <p className="filter__title">{props.title}</p>
      <SearchElement addFilteredElements={props.addFilteredElements} />
      <ul className="filter__list">
        {props.list.slice(0, countShow).map((item, index) => {
          return (
            <li className="filter__list-item" key={index}>
              <label className="filter__label" htmlFor="">
                <input
                  className="filter__checkbox"
                  type="checkbox"
                  name={item.name}
                  id={item.name}
                  value={item.name}
                  onChange={props.onChange}
                />
                {item.name}
                <span className="filter__count">({item.count})</span>
              </label>
            </li>
          );
        })}
      </ul>
      {COUNT_FILTERS <= props.list.length ? (
        <button className="filter__show-btn" onClick={handleShowAllBtn}>
          Показать все
          <div
            className={`filter__show-btn-img ${
              countShow !== COUNT_FILTERS ? "filter__show-btn-img_turn" : null
            }`}
          ></div>
        </button>
      ) : null}
    </div>
  );
});

export default FilterElement;
