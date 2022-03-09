import {
  requestPending,
  responseSuccess,
  loginSuccess,
  requestFail,
  loginFail,
  autoLoginPending,
  userLogoutSuccess,
  loginAuto,
  profileUpdateSuccess,
  passwordUpdateSuccess,
  resetPasswordResponse,
} from './userSlice';
import {
  createUser,
  verifyNewUser,
  loginUser,
  getUser,
  logoutUser,
  updateUserProfile,
  updateUserPassword,
} from '../../api/userAPI';
import {
  getNewAccessJWT,
  updateNewAccessJWT,
  requestOTP,
} from '../../api/tokenAPI';

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

export const userLogout = () => async (dispatch) => {
  const accessJWT = window.sessionStorage.getItem('accessJWT');
  const refreshJWT = window.localStorage.getItem('refreshJWT');
  await logoutUser({ accessJWT, refreshJWT });
  window.sessionStorage.removeItem('accessJWT');
  window.localStorage.removeItem('refreshJWT');
  dispatch(userLogoutSuccess());
};

export const fetchUser = () => async (dispatch) => {
  dispatch(requestPending());
  const data = await getUser();

  if (data?.message === 'jwt expired') {
    // request fo rnew accessJWT

    const token = await updateNewAccessJWT();
    if (token) {
      return dispatch(fetchUser());
    } else {
      dispatch(userLogout());
    }
  }
  if (data?.user) {
    return dispatch(loginSuccess(data?.user));
  }
  dispatch(requestFail(data));
};

export const updateProfileUser = (userInfo) => async (dispatch) => {
  dispatch(requestPending());
  const data = await updateUserProfile(userInfo);

  if (data?.message === 'jwt expired') {
    // request fo rnew accessJWT

    const token = await updateNewAccessJWT();
    if (token) {
      return dispatch(updateProfileUser(userInfo));
    } else {
      dispatch(userLogout());
    }
  }

  dispatch(profileUpdateSuccess(data));
};
export const updatePasswordUser = (passsInfo) => async (dispatch) => {
  dispatch(requestPending());
  const data = await updateUserPassword(passsInfo);

  if (data?.message === 'jwt expired') {
    // request fo rnew accessJWT

    const token = await updateNewAccessJWT();
    if (token) {
      return dispatch(updatePasswordUser(passsInfo));
    } else {
      dispatch(userLogout());
    }
  }

  dispatch(passwordUpdateSuccess(data));
};
export const requestPassResetOTP = (email) => async (dispatch) => {
  dispatch(requestPending());
  const data = await requestOTP(email);

  dispatch(resetPasswordResponse(data));
};
