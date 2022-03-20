import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  array: [],
}

export const arraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    setArray: (state, actions) => {
        state.array = actions.payload;
    }
  },
});

export const { setArray } = arraySlice.actions;
export default arraySlice.reducer;