import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
`;

export const Button = styled.button`
  padding: 8px;
  border-radius: 50%;

  outline: 0;
  cursor: pointer;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  svg {
    width: 31px;
    height: 31px;

    cursor: pointer;

    fill: var(--gray);

    &:hover,
    &.active {
      fill: var(--twitter);
    }
  }
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 20px 50px;
  border-bottom: 1px solid var(--outline);

  div {
    margin: 0 10px 0 0;
    flex: 1;
    background: var(--search);
  }

  button {
    background: var(--twitter);
    width: 100px;
    border-radius: 10px;
    padding: 16px;
    transition: background-color 0.2s ease-in;

    &:hover {
      background: var(--twitter-light-hover);
    }
  }
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--primary);
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
