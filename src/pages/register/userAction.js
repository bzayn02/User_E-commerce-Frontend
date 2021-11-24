import { requestPending, responseSuccess, requestFail } from './userSlice';
import { createUser } from '../../api/userAPI';

export const userRegister = (newUser) => async (dispatch) => {
  dispatch(requestPending());
  console.log(newUser);

  //call api
  const result = await createUser(newUser);
  console.log(result, 'from user action');
  result?.status === 'success'
    ? dispatch(responseSuccess(result))
    : dispatch(requestFail(result));
  //dispatch response
};
