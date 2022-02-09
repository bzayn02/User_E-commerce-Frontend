import {
  requestPending,
  responseSuccess,
  loginSuccess,
  requestFail,
  loginFail,
} from './userSlice';
import { createUser, verifyNewUser, loginUser } from '../../api/userAPI';
export const userRegister = (newUser) => async (dispatch) => {
  dispatch(requestPending());

  //call api
  const result = await createUser(newUser);
  result?.status === 'success'
    ? dispatch(responseSuccess(result))
    : dispatch(requestFail(result));
  //dispatch response
};
export const userEmailVerification = (userObj) => async (dispatch) => {
  dispatch(requestPending());

  //call api
  const result = await verifyNewUser(userObj);
  result?.status === 'success'
    ? dispatch(responseSuccess(result))
    : dispatch(requestFail(result));
  //dispatch response
};

export const userLogin = (loginInfo) => async (dispatch) => {
  dispatch(requestPending());

  // call api to login
  const result = await loginUser(loginInfo);

  if (result?.status === 'success') {
    return dispatch(loginSuccess(result.user));
  }

  dispatch(loginFail(result));
};
