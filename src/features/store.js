import {configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";


import categories from "./slice/categories";
import products from "./slice/products";
import userSlice from "./slice/user";


export const store = configureStore({
  reducer: {
	categories: categories,
	products: products,
	user: userSlice,
	[apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})