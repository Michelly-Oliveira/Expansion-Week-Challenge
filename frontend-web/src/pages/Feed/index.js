import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

import {
  Container,
  Wrapper,
  MainContainer,
  Header,
  Button,
  ProfileInfo,
  Search,
  FeedContainer,
  Tweets,
} from './styles';

import MenuBar from '../../components/MenuBar';
import Tweet from '../../components/Tweet';
import Input from '../../components/Input';

const Feed = () => {
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

          <Search>
            <Input
              icon={FiSearch}
              name="search"
              type="text"
              placeholder="Procure por usuários"
            />

            <button>Procurar</button>
          </Search>

          <FeedContainer>
            <Tweets>
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

export default Feed;
