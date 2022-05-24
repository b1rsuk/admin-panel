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
  visibleCategoryEdit: false,
  visibleDemensions: false,
  visibleAddDemensions: false,
  visibleFastPagination: false,
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
      state.visibleCategoryEdit = !state.visibleCategoryEdit;
    },
    visibleCategoryCreate: state => {
      state.visibleCategoryCreate = !state.visibleCategoryCreate
    },
    visibleDemensions: state => {
      state.visibleDemensions = !state.visibleDemensions
    },
    visibleAddDemensions: state => {
      state.visibleAddDemensions = !state.visibleAddDemensions
    },
    visibleFastPagination: state => {
      state.visibleFastPagination = !state.visibleFastPagination
    }
  },
});

export const { visibleProductPopup, visibleDelete, visibleNote, visibleUser, visibleCategory, visibleProductCreate, visibleDemensions, visibleAddDemensions, visibleCategoryEdit, visibleCategoryCreate, visibleFastPagination, setId } = popupSlice.actions;
export default popupSlice.reducer;