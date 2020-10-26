import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';

import {
  Container,
  Wrapper,
  MainContainer,
  Header,
  Button,
  ProfileInfo,
  ProfileContainer,
  Banner,
  Avatar,
  Form,
} from './styles';

import Input from '../../components/Input';

const EditProfile = () => {
  return (
    <Container>
      <Wrapper>
        <MainContainer>
          <Header>
            <Button>
              <Link to="/">
                <BiArrowBack />
              </Link>
            </Button>

            <ProfileInfo>
              <strong>Michelly Oliveira</strong>
            </ProfileInfo>
          </Header>

          <ProfileContainer>
            <Banner>
              <Avatar />
            </Banner>
          </ProfileContainer>

          <Form>
            <h2>Editar Perfil</h2>

            <Input
              icon={FiUser}
              name="username"
              type="text"
              placeholder="Nome de usuário"
            />

            <Input
              icon={FiMail}
              name="email"
              type="email"
              placeholder="E-mail"
            />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha atual"
            />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder=" Nova senha"
            />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Confirmar senha"
            />

            <button>Confirmar Mudanças</button>
          </Form>
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default EditProfile;
