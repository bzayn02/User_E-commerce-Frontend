import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { requestPassResetOTP } from '../../pages/user-auth-slice/userAction';
const PasswordResetForm = () => {
  const dispatch = useDispatch();
  const { isPending, resetPasswordResponse } = useSelector(
    (state) => state.user
  );

  const [email, setEmail] = useState('');

  useEffect(() => {}, []);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleOnSubmit = (e) => {
    if (!email) {
      return alert('Email required!');
    }
    e.preventDefault();
    console.log(
      'to do send email to server to request unique otp to reset the password.'
    );
    dispatch(requestPassResetOTP(email));
  };

  return (
    <div className="register-page mb-5">
      <Card className="p-3 reg-form">
        <h2>Reset Password</h2>

        {isPending && <Spinner variant="primary" animation="border" />}
        {resetPasswordResponse?.message && (
          <Alert
            variant={
              resetPasswordResponse?.status === 'success' ? 'success' : 'danger'
            }
          >
            {resetPasswordResponse?.message}
          </Alert>
        )}
        <hr />

        <Form className="mt-3" onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="youremail@email.com"
              value={email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Secret"
              required
              value={loginInfo.password}
              onChange={handleOnChange}
            />
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Request OTP
          </Button>
        </Form>
        <a href="/" className="text-end">
          Login now?
        </a>
      </Card>
    </div>
  );
};
export default PasswordResetForm;
