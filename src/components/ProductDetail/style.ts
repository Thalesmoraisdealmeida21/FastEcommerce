import styled from 'styled-components';

interface DetailProductDropleft {
  isVisible: boolean;
}

export const ContainerDetail = styled.div<DetailProductDropleft>`
  position: ${props => (props.isVisible ? 'absolute' : 'fixed')};

  background: #606a6b;
  margin-left: auto;
  right: ${props => (props.isVisible ? '0px' : '-300px')};
  width: 400px;
  border-radius: 80px 0px 0px 80px;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: 0.6s;
  overflow: hidden;
  overflow-x: hidden;
`;

export const ButtonCustomDetail = styled.button`
  cursor: pointer;
  margin-left: 50px;
  margin-top: 25px;
  background: transparent;
  border: transparent;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin: 20px auto;
    height: 150px;
  }
`;

export const DetailContainer = styled.div`
  background: #848f90;
  height: 100vh;
  padding: 20px;
  border-radius: 50px 50px 0px 50px;
  color: #fff;

  h3 {
    margin-top: 10px;
    font-size: 36px;
    font-weight: 300;
  }

  h4 {
    font-size: 36px;
    font-weight: 700;
  }

  p {
    margin-top: 30px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;

  h2 {
    margin-top: 15px;
  }

  input {
    border: transparent;
    width: 100%;
    background: transparent;
    margin: 0 auto;
  }
`;

export const ContainerInput = styled.div`
  height: 60px;
  margin-left: 40px;
  background: #d8d8d8;
  display: flex;
  flex-direction: row;
  width: 200px;
  padding: 0 30px;
  border-radius: 30px;

  input {
    width: 100px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  button {
    border: transparent;
    background: transparent;
  }
`;
export const Button = styled.button`
  height: 45px;
  background: #576061;
  border-radius: 15px;
  padding: 10px;
  width: 100%;
  margin-top: 50px;
  color: #fff;
  border: transparent;
`;
