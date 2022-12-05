import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPageNumber: 1,
  currentCategoryId: 0,
  sortTypeState: {
    currentSortName: 'популярность по убыванию',
    currentSortProperty: '-rating',
    currentSortId: 0,
  },
};

export const filterSlice = createSlice({
  name: 'filterInfo',
  initialState,
  reducers: {
    setPageCount(state, { payload: { pageNumber } }) {
      state.currentPageNumber = pageNumber + 1;
    },
    setCategoryId(state, { payload: { categoryId } }) {
      state.currentCategoryId = categoryId;
    },
    setSortType(state, { payload: { name, sortProperty, id } }) {
      state.sortTypeState.currentSortName = name;
      state.sortTypeState.currentSortProperty = sortProperty;
      state.sortTypeState.currentSortId = id;
    },
  },
});

export const { setPageCount, setCategoryId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
