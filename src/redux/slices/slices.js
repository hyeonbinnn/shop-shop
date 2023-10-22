import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  carts: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export const productDetailSlice = createSlice({
  name: 'productsDetail',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts } = productDetailSlice.actions;

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { setCarts } = cartSlice.actions;
