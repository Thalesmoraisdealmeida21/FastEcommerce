import React from 'react';

import { FaShoppingBag } from 'react-icons/fa';
import {
  ContainerHome,
  ActionItems,
  ButtonContainer,
  Content,
  ProductsList,
} from './styles';
import HeaderBarDetail from '../../components/HeaderBarDetail';
import SearchBox from '../../components/SearchBox';
import Product from '../../components/Product';

const Home: React.FC = () => {
  return (
    <>
      <ContainerHome>
        <HeaderBarDetail />

        <Content>
          <ActionItems>
            <SearchBox />

            <ButtonContainer>
              <FaShoppingBag size={35} />
            </ButtonContainer>
          </ActionItems>

          <h1>Encontre os melhores produtos</h1>

          <ProductsList>
            <Product />
            <Product />
            <Product />
            <Product />
          </ProductsList>
        </Content>
      </ContainerHome>
    </>
  );
};

export default Home;
