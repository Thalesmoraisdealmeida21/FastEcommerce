import styled from 'styled-components';

export const ProductContainer = styled.div``;

export const Card = styled.div`
  height: 240px;
  width: 350px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: #e8e8e8;
  padding: 10px;

  img {
    width: 130px;
    height: 150px;
  }
`;

export const DeatilsToBuy = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    width: 200px;
  }
  button {
    margin-left: auto;
    padding: 15px;
    border-radius: 10px;
    border: transparent;
    background: #576061;
    color: #fff;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ImgAndDescription = styled.div`
  display: flex;
  flex-direction: row;
`;
