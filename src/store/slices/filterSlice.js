import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentCategoryId: 0,
};

export const filterSlice = createSlice({
  name: 'filterInfo',
  initialState,
  reducers: {
    setCategoryId(state, { payload: { categoryId } }) {
      state.currentCategoryId = categoryId;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
