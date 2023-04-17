import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./common/Layout/Layout";
import Popup from "./common/Popup/Popup";
import BasketPage from "./pages/BasketPage/BasketPage";
import SuccessPopup from "./pages/BasketPage/SuccessPopup/SuccessPopup";
import AddGoodForm from "./pages/CatalogPage/AddGoodForm/AddGoodForm";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import GoodPage from "./pages/GoodPage/GoodPage";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { GoodElement } from "./common/Interfaces/IGoodElement";
import {
  addGood,
  clearStore,
  setMaxCost,
  setMinCost,
  setSumBasket,
} from "../store/slices/goodSlice";
import data from "../utils/data.json";
import { addBrands, addProducers } from "../store/slices/filterSlice";

function App() {
  const dispatch = useAppDispatch();
  const isLocalStore = useAppSelector((state) => state.goods.isLocalStore);
  let minCost = useAppSelector((state) => state.goods.minCost);
  let maxCost = useAppSelector((state) => state.goods.maxCost);
  const goods: Array<GoodElement> = [...data.data];
  const goodsStore = useAppSelector((state) => state.goods.goods);
  const basketGoods = goodsStore.filter((good) => good.isAdded === true);
  let popup = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let sum = 0;
    basketGoods.forEach((good) => {
      sum += good.countGoods * good.good.cost;
    });
    dispatch(setSumBasket(sum));
  }, [basketGoods]);

  useEffect(() => {
    dispatch(clearStore());
    if (isLocalStore || localStorage.goods) {
      setActualGoods(JSON.parse(localStorage.goods));
    } else {
      setActualGoods(goods);
    }
  }, [isLocalStore]);

  const setActualGoods = (store: GoodElement[]): void => {
    store.forEach((good: GoodElement) => {
      dispatch(addGood(good));

      if (good.cost < minCost) {
        minCost = good.cost;
      } else if (good.cost > maxCost) {
        maxCost = good.cost;
      }

      if (good.producer) {
        dispatch(addProducers(good.producer));
      }
      if (good.brand) {
        dispatch(addBrands(good.brand));
      }
    });

    dispatch(setMaxCost(maxCost));
    dispatch(setMinCost(minCost));
  };

  const openPopup = (): void => {
    popup.current?.showModal();
  };

  const closePopup = (): void => {
    popup.current?.close();
  };

  return (
    <>
      <Routes>
        <Route path="https://gudrom.github.io/shop-sultan/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <CatalogPage openPopup={openPopup} />
                <Popup closePopup={closePopup} popup={popup}>
                  <AddGoodForm closePopup={closePopup} />
                </Popup>
              </>
            }
          />
          <Route path=":id" element={<GoodPage />} />
          <Route
            path="basket"
            element={
              <>
                <BasketPage openPopup={openPopup} />
                <Popup closePopup={closePopup} popup={popup}>
                  <SuccessPopup />
                </Popup>
              </>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
