import styled from 'styled-components';

export const ContainerInput = styled.div`
  height: 60px;
  background: #3b4445;
  width: 550px;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    width: 280px;
  }

  @media (max-width: 550px) {
    width: 250px;
    padding: 15px;
  }

  input {
    background: transparent;
    border: transparent;
    color: white;
    width: 100%;
  }

  svg {
    margin-left: auto;
  }
`;
