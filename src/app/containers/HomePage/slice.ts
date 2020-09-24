import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { ContainerState } from './types';

export const initialState: ContainerState = {
  username: 'init username',
};

const homepageSlice = createSlice({
  name: 'homepage',
  initialState: initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homepageSlice;
