import React from 'react';

import Feeds from '../Feeds';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  Button,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  BellIcon,
  SearchIcon,
  EmailIcon,
} from './styles';

const Main = () => {
  return (
    <Container>
      <Header>
        <Button>
          <BackIcon />
        </Button>

        <ProfileInfo>
          <strong>Adilson Vicente</strong>
          <span>100 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
      <Feeds />
    </Container>
  );
};

export default Main;
