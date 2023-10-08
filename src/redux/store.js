import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productSlice, cartSlice } from './slices/slices';

const rootReducer = combineReducers({
  products: productSlice.reducer,
  carts: cartSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
