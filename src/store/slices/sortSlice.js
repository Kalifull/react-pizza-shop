import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSortName: 'популярность по убыванию',
  currentSortProperty: '-rating',
  currentSortId: 0,
};

export const sortSlice = createSlice({
  name: 'sortInfo',
  initialState,
  reducers: {
    setSortType(state, { payload: { name, sortProperty, id } }) {
      state.currentSortName = name;
      state.currentSortProperty = sortProperty;
      state.currentSortId = id;
    },
  },
});

export const { setSortType } = sortSlice.actions;

export default sortSlice.reducer;
