import React from 'react';
import { FaHome, FaUser, FaTwitter } from 'react-icons/fa';
import { HiLogout } from 'react-icons/hi';

import Button from '../Button';

import { Container, Topside, Logo, MenuButton } from './styles';

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <Logo>
          <FaTwitter />
        </Logo>

        <MenuButton>
          <FaHome />

          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton className="active">
          <FaUser />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <HiLogout />
          <span>Logout</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>
    </Container>
  );
};

export default MenuBar;
