import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
  padding: 14px 10px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  margin-bottom: 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
    stroke: var(--twitter);
  }

  input {
    flex: 1;
  }
`;
