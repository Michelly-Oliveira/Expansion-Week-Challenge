import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input';

import { Container, Logo, Form } from './style';

const SignUp = () => {
  return (
    <Container>
      <Logo>
        Twitter<span>Clone</span>
      </Logo>

      <Form>
        <h2>Crie sua conta</h2>

        <Input
          icon={FiUser}
          name="username"
          type="text"
          placeholder="Nome de usuário"
        />

        <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />

        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />

        <button>Cadastrar</button>

        <Link to="/login">
          <FiLogIn />
          Faça login
        </Link>
      </Form>
    </Container>
  );
};

export default SignUp;
