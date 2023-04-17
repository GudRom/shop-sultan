import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "../../components/common/Interfaces/IFilter";

interface FilterState {
  currentGoodType: string;
  producers: IFilter[];
  brands: IFilter[];
  filteredProducers: IFilter[];
  filteredBrands: IFilter[];
}

const initialState: FilterState = {
  currentGoodType: "",
  producers: [],
  brands: [],
  filteredProducers: [],
  filteredBrands: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addProducers(state, action: PayloadAction<string>) {
      const addedProducer = state.producers.filter(
        (producer) => producer.name === action.payload
      );
      if (addedProducer.length === 0) {
        state.producers.push({
          name: action.payload,
          count: 1,
        });
      } else {
        state.producers.forEach((producer) => {
          if (producer.name === action.payload) {
            producer.count += 1;
          }
        });
      }
    },

    addBrands(state, action: PayloadAction<string>) {
      const addedBrand = state.brands.filter(
        (brand) => brand.name === action.payload
      );
      if (addedBrand.length === 0) {
        state.brands.push({
          name: action.payload,
          count: 1,
        });
      } else {
        state.brands.forEach((brand) => {
          if (brand.name === action.payload) {
            brand.count += 1;
          }
        });
      }
    },

    setCurrentGoodType(state, action) {
      if (state.currentGoodType === action.payload) {
        state.currentGoodType= "";
      } else {
        state.currentGoodType = action.payload;
      }
    },

    addFilteredProducers(state, action: PayloadAction<string | undefined>) {
      state.filteredProducers = [];
      state.producers.forEach((producer) => {
        if (!action.payload) {
          state.filteredProducers.push(producer);
        } else if (
          action.payload.toLowerCase() === producer.name.toLowerCase()
        ) {
          state.filteredProducers.push(producer);
        }
      });
    },

    addFilteredBrands(state, action: PayloadAction<string | undefined>) {
      state.filteredBrands = [];
      state.brands.forEach((brand) => {
        if (!action.payload) {
          state.filteredBrands.push(brand);
        } else if (action.payload.toLowerCase() === brand.name.toLowerCase()) {
          state.filteredBrands.push(brand);
        }
      });
    },
  },
});

export const {
  addProducers,
  addBrands,
  setCurrentGoodType,
  addFilteredProducers,
  addFilteredBrands,
} = filterSlice.actions;

export default filterSlice.reducer;
