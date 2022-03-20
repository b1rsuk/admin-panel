import { configureStore } from '@reduxjs/toolkit'
import popupReducer from './redux/popupSlice';
import arrayReducer from './redux/arraySlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    array: arrayReducer,
  },
})