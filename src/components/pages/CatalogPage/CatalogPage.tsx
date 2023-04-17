import FilterList from "./FilterList/FilterList";
import FilterMenu from "./FilterMenu/FilterMenu";
import GoodsList from "./GoodsList/GoodsList";
import "./CatalogPage.scss";
import { FC, memo } from "react";

interface Props {
  openPopup: () => void;
}

const CatalogPage: FC<Props> = memo(({ openPopup }) => {
  return (
    <section className="catalog">
      <div className="catalog__top-box">
        <h2 className="catalog__title">Каталог</h2>
        <button className="catalog__add-btn" onClick={openPopup}>
          Добавить товар
        </button>
      </div>
      <FilterList />
      <div className="catalog__main-box">
        <FilterMenu />
        <div className="catalog__goodslist-box">
          <GoodsList />
          <p className="catalog__extra-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
            vulputate feugiat massa vestibulum duis. Faucibus consectetur
            aliquet sed pellentesque consequat consectetur congue mauris
            venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
            malesuada.
          </p>
        </div>
      </div>
    </section>
  );
});

export default CatalogPage;
