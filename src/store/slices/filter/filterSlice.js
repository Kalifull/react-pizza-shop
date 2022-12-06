import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageNumber: 1,
  categoryId: 0,
  sortType: {
    name: 'популярность по убыванию',
    sortProperty: '-rating',
    id: 0,
  },
};

export const filterSlice = createSlice({
  name: 'filterInfo',
  initialState,
  reducers: {
    setPageCount(state, { payload: { page } }) {
      state.pageNumber = page;
    },
    setCategoryId(state, { payload: { category } }) {
      state.categoryId = category;
    },
    setSortType(state, { payload: { sortType } }) {
      state.sortType = sortType;
    },
    setFilter(state, { payload: { sortType, category, page } }) {
      state.sortType = sortType;
      state.categoryId = +category;
      state.pageNumber = +page;
    },
  },
});

export const {
  setPageCount, setCategoryId, setSortType, setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
