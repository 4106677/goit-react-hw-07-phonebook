import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFiltered(state, { payload }) {
      return payload;
    },
  },
});

export const { setFiltered } = filtersSlice.actions;

//Selectors

export const getFilters = state => state.filters;
