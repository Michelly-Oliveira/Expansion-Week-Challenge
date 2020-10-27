import styled from 'styled-components';

import ButtonComponent from '../../components/Button';

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

  background: red;

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

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  background: var(--primary);

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);

  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);

  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(ButtonComponent)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--primary);
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
