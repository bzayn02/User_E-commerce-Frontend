import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  UserPasswordResetForm,
  UserProfileForm,
} from '../../components/user-profile/UserProfileForm';
import { UserLayout } from '../layout/UserLayout';
import { fetchUser } from '../user-auth-slice/userAction';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo._id) {
      dispatch(fetchUser());
    }
  }, [dispatch, userInfo]);
  return (
    <UserLayout>
      {' '}
      <Container>
        <div>
          <h2 className="text-center">Welcome {userInfo?.fname}!</h2>

          <hr />
          <h3>Update Profile</h3>
          <UserProfileForm />
          <hr />
          <h3 className="mt-5">Update Password</h3>
          <UserPasswordResetForm />
        </div>
      </Container>
    </UserLayout>
  );
};

export default UserProfile;
