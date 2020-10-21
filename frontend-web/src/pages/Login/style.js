import styled, { css } from 'styled-components';

import { Email, Lock, Login } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Logo = styled.h1`
  margin: 50px auto;
  font-size: 35px;

  span {
    color: var(--twitter);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 500px;

  border: 1px solid var(--twitter);
  border-radius: 25px;
  background: var(--search);

  h2 {
    margin: 30px 0 50px;
  }

  div {
    background: var(--primary);
    padding: 14px 10px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    margin-bottom: 20px;

    svg {
      margin-right: 10px;
    }

    input {
      flex: 1;
    }
  }

  button {
    background: var(--twitter);
    width: 255px;
    border-radius: 10px;
    padding: 14px;
    transition: background-color 0.2s ease-in;

    &:hover {
      background: var(--twitter-light-hover);
    }
  }

  a {
    text-decoration: none;
    margin: 20px 0 50px;
    color: var(--gray);
    font-size: 14px;

    svg {
      margin-right: 5px;
    }

    /* &:hover {
      color: var(--outline);
    } */
  }
`;

export const EmailIcon = styled(Email)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const PasswordIcon = styled(Lock)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const LoginIcon = styled(Login)`
  width: 20px;
  height: 20px;

  fill: var(--gray);
`;
