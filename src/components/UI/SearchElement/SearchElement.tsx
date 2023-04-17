import { memo, useEffect, useState } from "react";
import "./SearchElement.scss";

interface Props {
  addFilteredElements: (value: string) => void;
}

const SearchElement = memo((props: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) {
      props.addFilteredElements(value);
    }
  }, [value]);

  const handleSearchChange = (e: { target: { value: string } }): void => {
    setValue(e.target.value);
  };

  const searchElements = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    props.addFilteredElements(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        id="search"
        className="search__input"
        placeholder="Поиск..."
        onChange={handleSearchChange}
      />
      <button className="search__button" onClick={searchElements}></button>
    </div>
  );
});

export default SearchElement;
