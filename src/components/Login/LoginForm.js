import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const isEmailValid = () => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    // Perform validation
    if (!isEmailValid()) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    if (!hasUppercase || !hasLowercase) {
      setErrorMessage('Password must contain both uppercase and lowercase letters.');
      return;
    }

    // Perform login logic here
    // For now, just log the credentials
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect to another screen after successful login
    navigate('/tasks'); // Replace '/tasks' with the path to your tasks screen
  };

  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleLogin} className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginForm;
