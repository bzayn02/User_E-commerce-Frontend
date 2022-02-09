import { configureStore } from '@reduxjs/toolkit';
import userReducer from './pages/user-auth-slice/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
