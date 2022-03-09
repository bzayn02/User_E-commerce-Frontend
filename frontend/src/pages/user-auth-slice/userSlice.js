import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  isLoggedIn: false,
  isPending: false,
  userRegisterResponse: {},
  userLoginResponse: {},
  userUpdateResponse: {},
  passwordUpdateResponse: {},
  isAutoLoginPending: false,
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
      state.isAutoLoginPending = false;
    },
    profileUpdateSuccess: (state, { payload }) => {
      state.userUpdateResponse = payload;
      state.isPending = false;
    },
    passwordUpdateSuccess: (state, { payload }) => {
      state.passwordUpdateResponse = payload;
      state.isPending = false;
    },

    userLogoutSuccess: (state) => {
      state.userInfo = {};
      state.isLoggedIn = false;
    },
    loginFail: (state, { payload }) => {
      state.isPending = false;
      state.userLoginResponse = payload || {};
    },
    loginAuto: (state) => {
      state.isLoggedIn = true;
      state.isAutoLoginPending = false;
    },
    autoLoginPending: (state, { payload }) => {
      state.isAutoLoginPending = payload;
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
  autoLoginPending,
  loginSuccess,
  profileUpdateSuccess,
  passwordUpdateSuccess,
} = actions;
export default reducer;
