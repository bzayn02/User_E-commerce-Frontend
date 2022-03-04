import {
  requestPending,
  responseSuccess,
  loginSuccess,
  requestFail,
  loginFail,
  autoLoginPending,
  userLogoutSuccess,
  loginAuto,
} from './userSlice';
import { createUser, verifyNewUser, loginUser } from '../../api/userAPI';
import { getNewAccessJWT } from '../../api/tokenAPI';
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

export const setJWTinBrowserMemory = ({ accessJWT, refreshJWT }) => {
  window.sessionStorage.setItem('accessJWT', accessJWT);
  window.localStorage.setItem('refreshJWT', refreshJWT);
};

export const userLogin = (loginInfo) => async (dispatch) => {
  dispatch(requestPending());

  // call api to login
  const result = await loginUser(loginInfo);

  if (result?.status === 'success') {
    setJWTinBrowserMemory(result.jwts);
    return dispatch(loginSuccess(result.user));
  }

  dispatch(loginFail(result));
};

export const autoLogin = () => async (dispatch) => {
  dispatch(autoLoginPending(true));
  const accessJWT = window.sessionStorage.getItem('accessJWT');
  const refreshJWT = window.localStorage.getItem('refreshJWT');
  // 1. Access JWT exists
  if (accessJWT) {
    return dispatch(loginAuto());
  }
  // 2. Access JWT doesn't exist but refreshJWT does
  if (!accessJWT && refreshJWT) {
    // Call api to get access token
    const result = await getNewAccessJWT();
    if (result?.accessJWT) {
      window.sessionStorage.setItem('accessJWT', result.accessJWT);
      return dispatch(loginAuto());
    }
    // 3. No JWTs
    dispatch(userLogout());
  }
};

export const userLogout = () => (dispatch) => {
  window.sessionStorage.removeItem('accessJWT');
  window.localStorage.removeItem('refreshJWT');
  dispatch(userLogoutSuccess());
};
