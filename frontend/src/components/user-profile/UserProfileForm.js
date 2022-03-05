import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { updateProfileUser } from '../../pages/user-auth-slice/userAction';
import {
  Alert,
  Button,
  Card,
  Form,
  FormLabel,
  InputGroup,
  Spinner,
} from 'react-bootstrap';

const initialProfileState = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  dob: '',
  address: '',
  gender: '',
};

export const UserProfileForm = () => {
  const [userProfile, setUserProfile] = useState(initialProfileState);

  const dispatch = useDispatch();
  const { userInfo, isPending, userUpdateResponse } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    setUserProfile(userInfo);
  }, [userInfo]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, phone, address } = userProfile;

    if (
      userInfo.email !== email ||
      userInfo.phone !== phone ||
      userInfo.address !== address
    ) {
      if (window.confirm('Are you sure you want to update the info?')) {
        const update = { email, phone, address };
        dispatch(updateProfileUser(update));
      }
      return;
    }
    alert('No information is changed');
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  return (
    <div className="user-profile-page">
      <hr />
      {isPending && <Spinner variant="primary" animation="border" />}
      {userUpdateResponse?.message && (
        <Alert
          variant={
            userUpdateResponse?.status === 'success' ? 'success' : 'danger'
          }
        >
          {userUpdateResponse?.message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit} className="mt-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First Name *</Form.Label>
          <Form.Control
            name="fname"
            placeholder="Sam"
            value={userProfile.fname}
            required
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Last Name *</Form.Label>
          <Form.Control
            name="lname"
            placeholder="Smith"
            value={userProfile.lname}
            disabled
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            Email *{' '}
            {userProfile.isEmailConfirmed ? (
              <i
                title="Verified email."
                className="fa-solid fa-circle-check text-success"
              ></i>
            ) : (
              <i
                title="Email is not verified."
                className="fa-solid fa-circle-xmark text-danger"
              ></i>
            )}
          </Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="email"
            type="email"
            value={userProfile.email}
            placeholder="youremail@email.com"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="dob"
            type="date"
            value={userProfile?.dob?.substr(0, 10)}
            disabled={userProfile.dob}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="phone"
            value={userProfile.phone}
            placeholder="01########"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="address"
            placeholder="123 Martin Place, Sydney"
            value={userProfile.address}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <FormLabel>Gender</FormLabel>
          <InputGroup className="m-1">
            <InputGroup.Radio
              name="gender"
              aria-label="Male"
              defaultValue="male"
              checked={userProfile.gender === 'Male'}
              disabled
            />
            <span className="m-1">Male</span>
          </InputGroup>
          <InputGroup className="m-1">
            <InputGroup.Radio
              name="gender"
              defaultValue="female"
              checked={userProfile.gender === 'Female'}
              aria-label="Female"
              disabled
            />
            <span className="m-1">Female</span>
          </InputGroup>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit" variant="info" size="lg">
            Update Profile
          </Button>
        </div>
      </Form>
    </div>
  );
};
export const UserPasswordResetForm = () => {
  const dispatch = useDispatch();
  const { userInfo, isPending } = useSelector((state) => state.user);
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password *</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="password"
            type="password"
            minLength="8"
            placeholder="Secret"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Confirm Password *</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="confirmPassword"
            type="password"
            placeholder="Secret"
            required
          />
          {/* {passwordError && <Alert variant="danger">{passwordError}</Alert>} */}
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit" variant="warning" size="lg">
            Update Password
          </Button>
        </div>
      </Form>
    </div>
  );
};
