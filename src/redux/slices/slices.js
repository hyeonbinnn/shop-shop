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
    getProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts, getProduct } = productSlice.actions;

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
