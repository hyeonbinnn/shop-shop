import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productSlice, productDetailSlice, cartSlice } from './slices/slices';

const rootReducer = combineReducers({
  products: productSlice.reducer,
  productsDetail: productDetailSlice.reducer,
  carts: cartSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
