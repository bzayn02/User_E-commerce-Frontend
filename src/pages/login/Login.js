import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <div className="register-page mb-5">
      <Card className="p-3 reg-form">
        <h2>User Login</h2>
        <hr />
        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="youremail@email.com"
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
            />
          </Form.Group>

          <Button variant="primary">Login</Button>
        </Form>
        <a href="/user-registration">Not yet registered? Register Now</a>
      </Card>
    </div>
  );
};
export default Login;
