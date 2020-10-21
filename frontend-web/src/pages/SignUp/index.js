import React from 'react';

import {
  Container,
  Logo,
  Form,
  EmailIcon,
  PasswordIcon,
  LoginIcon,
  UsernameIcon,
} from './style';

const SignUp = () => {
  return (
    <Container>
      <Logo>
        Twitter<span>Clone</span>
      </Logo>

      <Form>
        <h2>Crie sua conta</h2>

        <div>
          <UsernameIcon />
          <input type="text" placeholder="Username" />
        </div>

        <div>
          <EmailIcon />
          <input type="email" placeholder="E-mail" />
        </div>

        <div>
          <PasswordIcon />
          <input type="password" placeholder="Senha" />
        </div>

        <button>Cadastrar</button>

        <a href="/login">
          <LoginIcon />
          Faça login
        </a>
      </Form>
    </Container>
  );
};

export default SignUp;
