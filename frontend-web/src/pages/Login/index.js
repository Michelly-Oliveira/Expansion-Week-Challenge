import React from 'react';

import {
  Container,
  Logo,
  Form,
  EmailIcon,
  PasswordIcon,
  LoginIcon,
} from './style';

const Login = () => {
  return (
    <Container>
      <Logo>
        Twitter<span>Clone</span>
      </Logo>

      <Form>
        <h2>Faça seu login</h2>

        <div>
          <EmailIcon />
          <input type="email" placeholder="E-mail" />
        </div>

        <div>
          <PasswordIcon />
          <input type="password" placeholder="Senha" />
        </div>

        <button>Entrar</button>

        <a href="/">
          <LoginIcon />
          Criar conta
        </a>
      </Form>
    </Container>
  );
};

export default Login;
