import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types/RootState';

export const selectUsername = (state: RootState) => state.homepage?.username;

// const myComplexSelector = createSelector(
//   mySelector,
//   someState => someState.someNestedState,
// )

// export { myComplexSelector };
