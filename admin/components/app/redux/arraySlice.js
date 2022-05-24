import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  array: [],
  createProduct: []
}

export const arraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    setArray: (state, actions) => {
        state.array = actions.payload;
    },
    setCreateProduct: (state, actions) => {
      state.createProduct = actions.payload;
    }
  },
});

export const { setArray, setCreateProduct } = arraySlice.actions;
export default arraySlice.reducer;