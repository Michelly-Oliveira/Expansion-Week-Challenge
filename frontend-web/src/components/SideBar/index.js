import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../../components/List';
import FollowSugestion from '../../components/FollowSugestion';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta..."
            elements={[
              <FollowSugestion name="Michelly" nickname="@Michelly8683" />,
              <FollowSugestion name="Guilherme" nickname="@Guilherme2625" />,
              <FollowSugestion name="Rellyson" nickname="@Rellyson5270" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
