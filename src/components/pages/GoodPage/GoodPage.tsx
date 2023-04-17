import Counter from "../../common/Counter/Counter";
import "./GoodPage.scss";
import { useAppSelector } from "../../../store/hook";
import BuyButton from "../../UI/BuyButton/BuyButton";
import { FC } from "react";

interface Props {}

const GoodPage: FC<Props> = () => {
  const goods = useAppSelector((state) => state.goods.goods);
  const current = useAppSelector((state) => state.goods.currentGood);
  const currentGood = goods.find((good) => good.id === current?.id);

  return (
    <section className="goodpage">
      {currentGood ? (
        <>
          <img
            className="goodpage__img"
            src={currentGood.good.url_img}
            alt="Товар"
          />
          <div className="goodpage__info-box">
            <div className="goodpage__title-box">
              <p className="goodpage__available">В наличии</p>
              <h3 className="goodpage__title">{currentGood.good.name}</h3>
              <div className="goodpage__weight-box">
                <div
                  className={`goodpage__type-weight ${
                    currentGood.good.type_weight === "мл"
                      ? "goodpage__type-weight_bottle"
                      : "goodpage__type-weight_box"
                  }`}
                ></div>
                <p className="goodpage__weight">
                  {currentGood.good.weight} {currentGood.good.type_weight}
                </p>
              </div>
            </div>
            <div className="goodpage__basket-box">
              <p className="goodpage__price">{currentGood.good.cost}</p>
              <Counter id={currentGood.id} />
              <div
                className={`goodpage__btn-wrapper ${
                  currentGood.isAdded ? "goodpage__btn-wrapper_disable" : null
                }`}
              >
                <BuyButton good={currentGood} fsize={"1rem"} />
              </div>
            </div>
            <div className="goodpage__action-box">
              <button className="goodpage__share-btn">
                <div className="goodpage__share-btn-img"></div>
              </button>
              <p className="goodpage__offer">
                При покупке от&nbsp;<b>10&nbsp;000 ₸</b> бесплатная доставка
                по&nbsp;Кокчетаву и&nbsp;области
              </p>
              <button className="goodpage__price-btn">
                Прайс&#8209;лист
                <div className="goodpage__save-img"></div>
              </button>
            </div>
            <ul className="goodpage__info">
              <li className="goodpage__info-item">
                <p className="goodpage__info-text">
                  <span className="goodpage__info-type">Производитель: </span>
                  {currentGood.good.producer}
                </p>
              </li>
              <li className="goodpage__info-item">
                <p className="goodpage__info-text">
                  <span className="goodpage__info-type">Бренд: </span>
                  {currentGood.good.brand}
                </p>
              </li>
              <li className="goodpage__info-item">
                <p className="goodpage__info-text">
                  <span className="goodpage__info-type">Артикул: </span>
                  460404
                </p>
              </li>
              <li className="goodpage__info-item">
                <p className="goodpage__info-text">
                  <span className="goodpage__info-type">Штрихкод: </span>
                  {currentGood.good.barcode}
                </p>
              </li>
            </ul>
            <details className="goodpage__details">
              <summary className="goodpage__summary">
                Описание
                <div className="goodpage__summary-img"></div>
              </summary>
              <p className="goodpage__details-text">
                {currentGood.good.description}
              </p>
            </details>
            <div className="goodpage__dashed-line"></div>
            <details className="goodpage__details">
              <summary className="goodpage__summary">
                Характеристики
                <div className="goodpage__summary-img"></div>
              </summary>
              <ul className="goodpage__info">
                <li className="goodpage__info-item">
                  <p className="goodpage__info-text">
                    <span className="goodpage__info-type">Назначение: </span>
                    {currentGood.good.type_product?.join(", ")}
                  </p>
                </li>
                <li className="goodpage__info-item">
                  <p className="goodpage__info-text">
                    <span className="goodpage__info-type">Тип: </span>
                    {currentGood.good.type_product?.join(", ")}
                  </p>
                </li>
                <li className="goodpage__info-item">
                  <p className="goodpage__info-text">
                    <span className="goodpage__info-type">Производитель: </span>
                    {currentGood.good.producer}
                  </p>
                </li>
                <li className="goodpage__info-item">
                  <p className="goodpage__info-text">
                    <span className="goodpage__info-type">Бренд: </span>
                    {currentGood.good.brand}
                  </p>
                </li>
                <li className="goodpage__info-item">
                  <p className="goodpage__info-text">
                    <span className="goodpage__info-type">Артикул: </span>
                    460404
                  </p>
                </li>
                <li className="goodpage__info-item">
                  <p className="goodpage__info-text">
                    <span className="goodpage__info-type">Штрихкод: </span>
                    {currentGood.good.barcode}
                  </p>
                </li>
                <li className="goodpage__info-item">
                  <p className="goodpage__info-text">
                    <span className="goodpage__info-type">Вес: </span>
                    {currentGood.good.weight}
                  </p>
                </li>
                <li className="goodpage__info-item">
                  <p className="goodpage__info-text">
                    <span className="goodpage__info-type">Объем: </span>
                    {currentGood.good.weight}
                  </p>
                </li>
                <li className="goodpage__info-item">
                  <p className="goodpage__info-text">
                    <span className="goodpage__info-type">
                      Кол-во в коробке:
                    </span>
                    {currentGood.good.weight}
                  </p>
                </li>
              </ul>
            </details>
          </div>
        </>
      ) : (
        <h3>Увы! Товар потерялся...</h3>
      )}
    </section>
  );
};

export default GoodPage;
