import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TextField, Button, Checkbox } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .continue-button {
    width: 550px;
  }
`;

const TitleSection = styled.div`
  margin: 35px;
  display: flex;
  .title {
    margin-right: 45px;
  }
  Button {
    top: 10px;
    left: 3px;
    width: 125px;
    height: 45px;
  }
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  .input-username {
    margin-bottom: 20px;
    width: 600px;
  }
  .input-password {
    width: 600px;
  }
`;

const FotgotPasswordSection = styled.div`
  display: flex;
  a {
    margin-top: 20px;
    margin-left: 276px;
  }
  Checkbox {
    margin-right: 30px;
  }
`;

export function LoginPage() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Container>
        <TitleSection>
          <h3 className="title">Sign in</h3>
          <Button variant="outlined" color="default">
            Register
          </Button>
        </TitleSection>
        <InputSection>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            color="primary"
            className="input-username"
            value={username}
            onChange={username => {
              setUsername(username.target.value);
            }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            color="primary"
            className="input-password"
            type="password"
            value={password}
            onChange={password => {
              setPassword(password.target.value);
            }}
          />
        </InputSection>
        <FotgotPasswordSection>
          <Checkbox color="default" />
          <h4>Stay signed in</h4>
          <a href="/login" className="">
            Forgot your password?
          </a>
        </FotgotPasswordSection>
        <Button
          onClick={() => {
            console.log(username, ': ', password);
          }}
          variant="contained"
          color="primary"
          className="continue-button"
        >
          Continue
        </Button>
      </Container>
    </>
  );
}
