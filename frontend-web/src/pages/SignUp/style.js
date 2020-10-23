import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Logo = styled.h1`
  margin: 50px auto;
  font-size: 35px;

  span {
    color: var(--twitter);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 450px;

  border: 1px solid var(--twitter);
  border-radius: 25px;
  background: var(--search);

  h2 {
    margin: 30px 0 50px;
  }

  button {
    background: var(--twitter);
    width: 255px;
    border-radius: 10px;
    padding: 14px;
    transition: background-color 0.2s ease-in;

    &:hover {
      background: var(--twitter-light-hover);
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    margin: 20px 0 50px;
    color: var(--gray);
    font-size: 14px;
    transition: color 0.2s ease-in;

    svg {
      margin-right: 5px;
      width: 20px;
      stroke: var(--gray);
      height: 20px;
      transition: stroke 0.2s ease-in;
    }

    &:hover {
      color: var(--outline);

      svg {
        stroke: var(--outline);
      }
    }
  }
`;
