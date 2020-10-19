import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
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
              <CommentIcon />
              10
            </Status>

            <Status>
              <RetweetIcon />
              10
            </Status>

            <Status>
              <LikeIcon />
              100
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
