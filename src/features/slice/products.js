import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";
import { shuffle } from "../../utils/common";

export const getProducts = createAsyncThunk(
	"products/getProducts",
	async (_, thunkAPI) => {
	  try {
		const res = await axios(`${BASE_URL}/products`);
		return res.data;
	  } catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	  }
	}
);

const   initialState = {
  dates: [],
  filtered: [],
  related: [],
  isLoading: false,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
	filterByPrice: (state, { payload }) => {
	  state.filtered = state.dates.filter(({ price }) => price < payload);
	},
	getRelatedProducts: (state, action) => {
	  const dates = state.dates.filter(({ category: { id } }) => id === action.payload);
	  state.related = shuffle(dates);
	},
  },
  extraReducers: (builder) => {
	builder.addCase(getProducts.pending, (state) => {
	  state.isLoading = true;
	});
	builder.addCase(getProducts.fulfilled, (state, { payload }) => {
	  state.dates = payload;
	  state.isLoading = false;
	});
	builder.addCase(getProducts.rejected, (state) => {
	  state.isLoading = false;
	});
  },
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;