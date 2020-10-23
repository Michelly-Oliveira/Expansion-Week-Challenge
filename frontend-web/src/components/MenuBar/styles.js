import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1080px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  width: 45px;
  height: 45px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 25px;

  svg {
    width: 100%;
    height: 100%;
    fill: var(--twitter);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1080px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  svg {
    flex-shrink: 0;

    width: 25px;
    height: 25px;
    color: var(--white);
  }

  &:hover,
  &.active {
    span,
    svg {
      fill: var(--twitter);
    }
  }
`;
