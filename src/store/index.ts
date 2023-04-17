import { configureStore } from "@reduxjs/toolkit";
import goodReducer from "./slices/goodSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    goods: goodReducer,
    filters: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
