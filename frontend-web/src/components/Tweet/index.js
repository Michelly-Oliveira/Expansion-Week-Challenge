import React from 'react';
import {
  AiOutlineComment,
  AiOutlineRetweet,
  AiOutlineLike,
} from 'react-icons/ai';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
} from './styles';

const Tweet = () => {
  return (
    <Container>
      <Retweeted>Você retweetou</Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Michelly</strong>
            <time>17 de julho</time>
          </Header>

          <Description>hj não tem tweets</Description>

          <ImageContent />

          <Icons>
            <Status>
              <AiOutlineComment />
              10
            </Status>

            <Status>
              <AiOutlineRetweet />
              10
            </Status>

            <Status>
              <AiOutlineLike />
              100
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
