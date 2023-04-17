import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Goods } from "../../components/common/Interfaces/IGoods";
import { GoodElement } from "../../components/common/Interfaces/IGoodElement";

interface GoodsState {
  goods: Goods[];
  filteredGoods: Goods[];
  currentGood: Goods | null;
  isLocalStore: boolean;
  minCost: number;
  maxCost: number;
  sumBasket: number;
}

const initialState: GoodsState = {
  goods: [],
  filteredGoods: [],
  currentGood: null,
  isLocalStore: false,
  minCost: 1000000,
  maxCost: 0,
  sumBasket: 0,
};

const goodSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    addGood(state, action: PayloadAction<GoodElement>) {
      state.goods.push({
        good: action.payload,
        countGoods: 1,
        isAdded: false,
        id: action.payload.barcode,
      });
    },
    addCurrentGood(state, action: PayloadAction<Goods>) {
      state.currentGood = action.payload;
    },

    addFilteredGood(state, action: PayloadAction<Goods>) {
      state.filteredGoods.push(action.payload);
    },

    setIsAddedTrue(state, action: PayloadAction<number>) {
      let addedGood = state.goods.find((good) => good.id === action.payload);
      if (addedGood) {
        addedGood.isAdded = true;
      }
    },

    setMinCost(state, action: PayloadAction<number>) {
      state.minCost = action.payload;
    },

    setMaxCost(state, action: PayloadAction<number>) {
      state.maxCost = action.payload;
    },

    setSumBasket(state, action: PayloadAction<number>) {
      state.sumBasket = action.payload;
    },

    setIsAddedFalse(state, action: PayloadAction<number>) {
      let addedGood = state.goods.find((good) => good.id === action.payload);
      if (addedGood) {
        addedGood.isAdded = false;
      }
    },

    setIsLocalStore(state, action: PayloadAction<boolean>) {
      state.isLocalStore = action.payload;
    },

    increaseCount(state, action: PayloadAction<number>) {
      let addedGood = state.goods.find((good) => good.id === action.payload);
      if (addedGood) {
        addedGood.countGoods += 1;
      }
    },

    decreaseCount(state, action: PayloadAction<number>) {
      let addedGood = state.goods.find((good) => good.id === action.payload);
      if (addedGood && addedGood.countGoods > 1) {
        addedGood.countGoods -= 1;
      }
    },

    clearCount(state, action: PayloadAction<number>) {
      let good = state.goods.find((good) => good.id === action.payload);
      if (good) {
        good.countGoods = 1;
      }
    },

    deleteGood(state, action: PayloadAction<number>) {
      state.goods = state.goods.filter(
        (good: { id: number }) => good.id !== action.payload
      );
    },

    clearStore(state) {
      state.goods = [];
    },

    clearFilteredStore(state) {
      state.filteredGoods = [];
    },
  },
});

export const {
  addGood,
  addCurrentGood,
  setMaxCost,
  setMinCost,
  setIsAddedTrue,
  setIsAddedFalse,
  increaseCount,
  decreaseCount,
  clearCount,
  clearStore,
  clearFilteredStore,
  deleteGood,
  setIsLocalStore,
  addFilteredGood,
  setSumBasket,
} = goodSlice.actions;

export default goodSlice.reducer;
