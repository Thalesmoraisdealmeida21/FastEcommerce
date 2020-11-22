import styled from 'styled-components';

interface DropDownCart {
  isVisible: boolean;
}

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionItems = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
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

export const ButtonContainer = styled.button<DropDownCart>`
  width: 80px;
  height: 60px;
  margin-left: auto;
  border-radius: 15px;
  border: transparent;
  background: rgba(255, 255, 255, 0.68);
  transition: max-height 0.7s;

  visibility: ${props => (props.isVisible ? 'hidden' : 'visible')};
  span {
    background: #fff;
    border-radius: 50%;
    font-size: 12px;
    color: #000;
    width: 15px;
    position: absolute;
    margin-top: 28px;
    margin-left: -10px;
  }

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

  @media (max-width: 600px) {
    padding: 0 30px;
  }

  h1 {
    color: #fff;
    font-size: 36px;
  }
`;

export const CartCollapse = styled.div<DropDownCart>`
  width: 400px;
  background: #e8e8e8;
  box-shadow: -2px 7px 4px rgba(0, 0, 0, 0.25);
  visibility: visible;
  position: absolute;
  right: 10px;
  top: 150px;
  z-index: 9;
  padding: ${props => (props.isVisible ? '25px' : '0px')};
  transition: ease-in-out 0.7s;
  max-height: ${props => (props.isVisible ? '500px' : '0px')};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 10px;
    margin-left: 160px;
  }

  button {
    height: 42px;
    padding: 10px;
    background: #576061;
    border-radius: 8px;
    border: transparent;
    color: #fff;
    margin: 40px 0 0;
    &:hover {
      opacity: 0.7;
    }
  }

  ul {
    border-bottom: 2px solid black;
    overflow: scroll;
    li {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid black;

      button {
        background: transparent;
        color: #576061;
        margin-top: 5px;
        margin-right: 15px;
      }

      img {
        width: 60px;
      }

      div {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-top: 6px;
      }

      h2 {
        margin: auto 0;
      }
    }
  }
`;
