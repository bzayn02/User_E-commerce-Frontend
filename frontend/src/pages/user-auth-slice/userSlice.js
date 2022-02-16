import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  isLoggedIn: false,
  isPending: false,
  userRegisterResponse: {},
  userLoginResponse: {},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isPending = true;
    },
    responseSuccess: (state, { payload }) => {
      state.isPending = false;
      state.userRegisterResponse = payload || {};
    },
    loginSuccess: (state, { payload }) => {
      state.userInfo = payload;
      state.isLoggedIn = true;
      state.userLoginResponse = {};
      state.isPending = false;
    },
    loginAuto: (state) => {
      state.isLoggedIn = true;
    },
    loginFail: (state, { payload }) => {
      state.isPending = false;
      state.userLoginResponse = payload || {};
    },
    userLogoutSuccess: (state) => {
      state.userInfo = {};
      state.isLoggedIn = false;
    },
    requestFail: (state, { payload }) => {
      state.isPending = false;
      state.userRegisterResponse = payload || {};
    },
  },
});

const { reducer, actions } = userSlice;

export const {
  requestPending,
  responseSuccess,
  requestFail,
  loginFail,
  loginAuto,
  userLogoutSuccess,
  loginSuccess,
} = actions;
export default reducer;
