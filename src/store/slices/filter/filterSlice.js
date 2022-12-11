import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  searchValue: '',
  pageNumber: 1,
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
    setCategoryId(state, { payload: { category } }) {
      state.categoryId = category;
    },
    setSearchValue(state, { payload: { search } }) {
      state.searchValue = search;
    },
    setPageCount(state, { payload: { page } }) {
      state.pageNumber = page;
    },
    setSortType(state, { payload: { sortType } }) {
      state.sortType = sortType;
    },
    setFilter(state, action) {
      const {
        payload: { sortType, category, page },
      } = action;
      if (Object.keys(action.payload).length) {
        state.sortType = sortType;
        state.categoryId = +category;
        state.pageNumber = +page;
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sortType = {
          name: 'популярность по убыванию',
          sortProperty: '-rating',
          id: 0,
        };
      }
    },
  },
});

export const {
  setCategoryId, setSearchValue, setPageCount, setSortType, setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
