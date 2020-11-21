import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionItems = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
  width: 100%;

  div {
    margin: 0 auto;
  }
  button {
    margin-left: auto;
  }
`;

export const ProductsList = styled.div`
  margin: 35px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    margin: 10px;
  }
`;

export const ButtonContainer = styled.button`
  width: 80px;
  height: 60px;
  margin-left: auto;
  border-radius: 15px;
  border: transparent;
  background: rgba(255, 255, 255, 0.68);
  transition: 0.7s;

  &:hover {
    background: #444d4e;
    svg {
      color: rgba(255, 255, 255, 0.68);
    }
  }

  svg {
    transition: 3s;
    color: #444d4e;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;

  h1 {
    color: #fff;
    font-size: 36px;
  }
`;
