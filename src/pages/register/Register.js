import React, { useState } from 'react';

import {
  Card,
  Form,
  InputGroup,
  Button,
  FormLabel,
  Alert,
  Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from './userAction';

const initialState = {
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

const Register = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState('');

  const { isPending, userRegisterResponse } = useSelector(
    (state) => state.user
  );
  const handleOnChange = (e) => {
    //set input value in the state
    const { name, value } = e.target;

    // reset error message
    passwordError && name === 'confirmPassword' && setPasswordError();

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    //send the form data to the server
    e.preventDefault();

    // check for the password confirmation

    const { confirmPassword, ...newUser } = user;

    const { password } = user;
    if (password !== confirmPassword) {
      setPasswordError('Password did not match!');
      return;
    }

    dispatch(userRegister(newUser));
  };

  return (
    <div className="register-page mb-5">
      <Card className="p-3 reg-form">
        <h2>User Registration</h2>
        <hr />
        {isPending && <Spinner variant="primary" animation="border" />}
        {userRegisterResponse?.message && (
          <Alert
            variant={
              userRegisterResponse?.status === 'success' ? 'success' : 'danger'
            }
          >
            {userRegisterResponse?.message}
          </Alert>
        )}
        <Form onSubmit={handleOnSubmit} className="mt-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="fname"
              placeholder="Sam"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="lname"
              placeholder="Smith"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="email"
              type="email"
              placeholder="youremail@email.com"
              required
            />
          </Form.Group>
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
            {passwordError && <Alert variant="danger">{passwordError}</Alert>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>DOB</Form.Label>
            <Form.Control onChange={handleOnChange} name="dob" type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="phone"
              placeholder="01########"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="address"
              placeholder="123 Martin Place, Sydney"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <FormLabel>Gender</FormLabel>
            <InputGroup>
              <InputGroup.Radio
                onChange={handleOnChange}
                name="gender"
                aria-label="Male"
                defaultValue="male"
              />
              Male
              <InputGroup.Radio
                onChange={handleOnChange}
                name="gender"
                defaultValue="female"
                aria-label="Female"
                className=""
              />
              Female
            </InputGroup>
          </Form.Group>
          <Button type="submit" variant="primary">
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
