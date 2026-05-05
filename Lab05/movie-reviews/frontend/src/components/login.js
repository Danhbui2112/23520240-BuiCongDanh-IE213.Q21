import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Login = props => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const onChangeName = e => {
    const name = e.target.value;
    setName(name);
  };

  const login = () => {
    const user = {
      _id: '507f1f77bcf86cd799439011',
      name: name
    };
    
    props.login(user);
    navigate('/movies');
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={onChangeName}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={login}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
