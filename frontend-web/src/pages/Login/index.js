import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input';

import { Container, Logo, Form } from './style';

const LoginPage = () => {
  return (
    <Container>
      <Logo>
        Twitter<span>Clone</span>
      </Logo>

      <Form>
        <h2>Faça seu login</h2>

        <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />

        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />

        <button>Entrar</button>

        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Form>
    </Container>
  );
};

export default LoginPage;
