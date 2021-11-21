import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPending: false,
  userRegisterResponse: {},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isPending = true;
    },
    requestFail: (state, { payload }) => {
      state.isPending = false;
      state.userRegisterResponse = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export default reducer;
