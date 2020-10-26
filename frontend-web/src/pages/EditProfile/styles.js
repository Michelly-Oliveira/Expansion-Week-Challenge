import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
  height: 100vh;
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

  background: var(--search);

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

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  height: 280px;

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

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Avatar = styled.button`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);

  transition: all 0.2s;

  &:hover {
    background: var(--outline);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 30px 0 50px;
  }

  button {
    background: var(--twitter);

    width: 255px;
    border-radius: 10px;
    padding: 14px;

    position: fixed;
    bottom: 50px;

    transition: background-color 0.2s ease-in;

    &:hover {
      background: var(--twitter-light-hover);
    }
  }
`;
