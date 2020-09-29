import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { PageState, SelectedPageType } from './types';
// import { ThemeState, ThemeKeyType } from './types';
// import { getThemeFromStorage, isSystemDark } from './utils';
// import { } from './PageTypes';
import { getSelectedPageFromWindow } from './utils';

export const initialState: PageState = {
  selected: getSelectedPageFromWindow(),
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<SelectedPageType>) {
      state.selected = action.payload;
    },
  },
});

export const selectPage = createSelector(
  [(state: RootState) => state.page || initialState],
  page => page,
);

export const { changePage } = pageSlice.actions;
export const reducer = pageSlice.reducer;
export const pageSliceKey = pageSlice.name;
