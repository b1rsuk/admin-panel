import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  array: [],
  value: '',
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
    },
    setValue: (state, actions) => {
      state.value = actions.payload;
    }
  },
});

export const { setArray, setCreateProduct, setValue } = arraySlice.actions;
export default arraySlice.reducer;