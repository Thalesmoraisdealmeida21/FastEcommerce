import styled from 'styled-components';

export const ContainerHeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 10vw;

  height: 50px;
  width: 100%;
  max-width: 100vw;
  background: #394243;
  border-radius: 0px 0px 50px 50px;
  color: #fff;

  header {
    margin: auto 0;
    display: flex;
    flex-direction: row;
    width: 100%;

    span {
      font-weight: medium;
      font-size: 18px;
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    svg {
      margin: 0 5px;
      transition: 0.5s;

      &:hover {
        color: #a2a2a2;
      }
    }

    div {
      margin-left: auto;
    }
  }
`;
