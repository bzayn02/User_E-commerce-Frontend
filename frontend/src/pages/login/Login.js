import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../user-auth-slice/userAction';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, isPending, userLoginResponse } = useSelector(
    (state) => state.user
  );

  const initialState = {
    email: 'ap@gmail.com',
    password: 'asdfjkl;',
  };
  const [loginInfo, setLoginInfo] = useState(initialState);

  useEffect(() => {
    isLoggedIn && navigate('/dashboard');
  }, [isLoggedIn, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email && !password) {
      return alert('You must enter both email and password to login.');
    }
    dispatch(userLogin(loginInfo));
  };

  return (
    <div className="register-page mb-5">
      <Card className="p-3 reg-form">
        <h2>User Login</h2>

        {isPending && <Spinner variant="primary" animation="border" />}
        {userLoginResponse?.message && (
          <Alert
            variant={
              userLoginResponse?.status === 'success' ? 'success' : 'danger'
            }
          >
            {userLoginResponse?.message}
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
              value={loginInfo.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Secret"
              required
              value={loginInfo.password}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <a href="/user-registration" className="text-end">
          Register Now
        </a>
      </Card>
    </div>
  );
};
export default Login;
