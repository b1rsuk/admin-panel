import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  visibleProductPopup: false,
  visibleDelete: false,
  visibleNote: false,
  visibleUser: false,
  visibleCategory: false,
  visibleProductCreate: false,
  visibleCategoryCreate: false,
  categoryEdit: false
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setId: (state, actions) => {
        state.id = actions.payload;
    },
    visibleProductPopup: state => {
      state.visibleProductPopup = !state.visibleProductPopup;
    },
    visibleDelete: state => {
      state.visibleDelete = !state.visibleDelete;
    },
    visibleNote: state => {
      state.visibleNote = !state.visibleNote;
    },
    visibleUser: state => {
      state.visibleUser = !state.visibleUser;
    },
    visibleCategory: state => {
      state.visibleCategory = !state.visibleCategory;
    },
    visibleProductCreate: state => {
      state.visibleProductCreate = !state.visibleProductCreate;
    },
    visibleCategoryEdit: state => {
      state.categoryEdit = !state.categoryEdit;
    },
    visibleCategoryCreate: state => {
      state.visibleCategoryCreate = !state.visibleCategoryCreate
    }
  },
});

export const { visibleProductPopup, visibleDelete, visibleNote, visibleUser, visibleCategory, visibleProductCreate, visibleCategoryEdit, visibleCategoryCreate, setId } = popupSlice.actions;
export default popupSlice.reducer;