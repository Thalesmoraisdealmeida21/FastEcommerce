import React, { useCallback, useEffect, useState } from 'react';

import { FaShoppingBag } from 'react-icons/fa';
import {
  ContainerHome,
  ActionItems,
  ButtonContainer,
  Content,
  ProductsList,
  CartCollapse,
} from './styles';
import HeaderBarDetail from '../../components/HeaderBarDetail';
import SearchBox from '../../components/SearchBox';
import Product from '../../components/Product';
import cadeira from '../../assets/cadeira.png';
import ProductDetail from '../../components/ProductDetail';

interface IProduct {
  description: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Home: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const [productSelected, setProductSelected] = useState<Product>(
    {} as Product,
  );

  useEffect(() => {
    setProducts([
      {
        description: 'Lorem Impsum is simply dummy',
        name: 'Cadeira de Jardim',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png',
        price: 100,
        quantity: 1,
      },
      {
        description: 'Lorem Impsum is simply dummy',
        name: 'Cadeira de Jardim',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png',
        price: 100,
        quantity: 1,
      },
      {
        description: 'Lorem Impsum is simply dummy',
        name: 'Cadeira de Jardim',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png',
        price: 100,
        quantity: 1,
      },
      {
        description: 'Lorem Impsum is simply dummy',
        name: 'Cadeira de Escritório',
        image:
          'https://www.cadeirasparaescritorio.ind.br/media/product/ebd/cadeira-executiva-para-escritorio-base-giratoria-e-regulagem-de-altura-cp20-space-cinza-081.png',
        price: 50,
        quantity: 1,
      },
      {
        description: 'Lorem Impsum is simply dummy',
        name: 'Cadeira Gamer',
        image:
          'https://www.matrixmoveis.com.br/image/cache/catalog/capa/cadeira-gamer-com-apoio-a11119-1000x1000.png',
        price: 1650.9,
        quantity: 1,
      },
    ]);
  }, []);

  const handleSearchProduct = useCallback(
    (name: string) => {
      console.log(name);
      if (name === '') {
        setProducts([
          {
            description: 'Lorem Impsum is simply dummy',
            name: 'Cadeira de Jardim',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png',
            price: 100,
            quantity: 1,
          },
          {
            description: 'Lorem Impsum is simply dummy',
            name: 'Cadeira de Jardim',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png',
            price: 100,
            quantity: 1,
          },
          {
            description: 'Lorem Impsum is simply dummy',
            name: 'Cadeira de Jardim',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png',
            price: 100,
            quantity: 1,
          },
          {
            description: 'Lorem Impsum is simply dummy',
            name: 'Cadeira de Escritório',
            image:
              'https://www.cadeirasparaescritorio.ind.br/media/product/ebd/cadeira-executiva-para-escritorio-base-giratoria-e-regulagem-de-altura-cp20-space-cinza-081.png',
            price: 50,
            quantity: 1,
          },
          {
            description: 'Lorem Impsum is simply dummy',
            name: 'Cadeira Gamer',
            image:
              'https://www.matrixmoveis.com.br/image/cache/catalog/capa/cadeira-gamer-com-apoio-a11119-1000x1000.png',
            price: 1650.9,
            quantity: 1,
          },
        ]);
      } else {
        const prodSearched = products.filter(prod => prod.name.includes(name));
        setProducts(prodSearched);
        console.log(products);
      }
    },
    [products],
  );

  return (
    <>
      <ProductDetail
        product={productSelected}
        setShowDetail={setShowDetails}
        showDetails={showDetails}
        setProduct={setProductSelected}
      />
      <ContainerHome>
        <HeaderBarDetail />

        <Content>
          <ActionItems>
            <SearchBox
              onChange={evt => {
                handleSearchProduct(evt.target.value);
              }}
            />

            <ButtonContainer
              onClick={() => {
                setShowCart(!showCart);
              }}
              onMouseEnter={() => {
                setShowCart(true);
              }}
            >
              <FaShoppingBag size={35} />
              <span />
            </ButtonContainer>

            <CartCollapse
              onMouseEnter={() => {
                setShowCart(true);
              }}
              isVisible={showCart}
            >
              <ul>
                <li>
                  <img src={cadeira} alt="cadeira" />
                  <div>
                    <span>Cadeira de Jardim</span>
                    <h3>R$ 100,00</h3>
                  </div>

                  <h2>x1</h2>
                </li>

                <li>
                  <img src={cadeira} alt="cadeira" />
                  <div>
                    <span>Cadeira de Jardim</span>
                    <h3>R$ 100,00</h3>
                  </div>

                  <h2>x1</h2>
                </li>

                <li>
                  <img src={cadeira} alt="cadeira" />
                  <div>
                    <span>Cadeira de Jardim</span>
                    <h3>R$ 100,00</h3>
                  </div>

                  <h2>x1</h2>
                </li>

                <li>
                  <img src={cadeira} alt="cadeira" />
                  <div>
                    <span>Cadeira de Jardim</span>
                    <h3>R$ 100,00</h3>
                  </div>

                  <h2>x2</h2>
                </li>
              </ul>

              <h2>Total: R$ 1600,00</h2>

              <button type="button">Finalizar Pedido</button>
            </CartCollapse>
          </ActionItems>

          <h1>Encontre os melhores produtos</h1>

          <ProductsList>
            {products.map(prod => (
              <Product
                SetOpenDetail={setShowDetails}
                product={prod}
                setProductSelected={setProductSelected}
              />
            ))}
          </ProductsList>
        </Content>
      </ContainerHome>
    </>
  );
};

export default Home;
