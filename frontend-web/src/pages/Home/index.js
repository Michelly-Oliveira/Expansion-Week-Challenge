import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

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
  ProfileData,
  EditButton,
  Followage,
  FeedContainer,
  Tab,
  Tweets,
} from './styles';

import MenuBar from '../../components/MenuBar';
import Tweet from '../../components/Tweet';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />

        <MainContainer>
          <Header>
            <Button>
              <BiArrowBack />
            </Button>

            <ProfileInfo>
              <strong>Michelly Oliveira</strong>
              <span>100 Tweets</span>
            </ProfileInfo>
          </Header>

          <ProfileContainer>
            <Banner>
              <Avatar />
            </Banner>

            <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>

              <h1>Michelly Oliveira</h1>

              <Followage>
                <span>
                  seguindo
                  <strong> 94 </strong>
                </span>

                <span>
                  <strong> 100 </strong>
                  seguidores
                </span>
              </Followage>
            </ProfileData>
          </ProfileContainer>

          <FeedContainer>
            <Tab>Twittes</Tab>

            <Tweets>
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
            </Tweets>
          </FeedContainer>
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
