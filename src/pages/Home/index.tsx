import React, { useCallback, useEffect, useState } from 'react';

import { FaShoppingBag, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
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
import { useCart } from '../../hooks/Cart';

interface IProduct {
  id: string;
  description: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
const Home: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [productsDB, setProductsDB] = useState<IProduct[]>([]);

  const [productSelected, setProductSelected] = useState<Product>(
    {} as Product,
  );

  const { products, removeToCart, clearCart, getTotal } = useCart();

  useEffect(() => {
    setShowCart(false);
  }, [showDetails]);

  useEffect(() => {
    setProductsDB([
      {
        id: '1',
        description: 'Lorem Impsum is simply dummy',
        name: 'Armario Muito bonito',
        image:
          'https://www.novamaqmoveis.com.br/wp-content/uploads/2018/08/armario-alto-diretor.png',
        price: 100,
        quantity: 1,
      },
      {
        id: '2',
        description: 'Lorem Impsum is simply dummy',
        name: 'Cadeira de Jardim',
        image: cadeira,
        price: 100,
        quantity: 1,
      },
      {
        id: '3',
        description: 'Lorem Impsum is simply dummy',
        name: 'Cadeira simples',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png',
        price: 100,
        quantity: 1,
      },
      {
        id: '4',
        description: 'Lorem Impsum is simply dummy',
        name: 'Cadeira de Escritório',
        image:
          'https://www.cadeirasparaescritorio.ind.br/media/product/ebd/cadeira-executiva-para-escritorio-base-giratoria-e-regulagem-de-altura-cp20-space-cinza-081.png',
        price: 50,
        quantity: 1,
      },
      {
        id: '5',
        description: 'Lorem Impsum is simply dummy',
        name: 'Banco Alto',
        image:
          'https://e7.pngegg.com/pngimages/58/362/png-clipart-brown-wooden-stool-chair-furniture-couch-chair-stool-bar-stool-thumbnail.png',
        price: 1650.9,
        quantity: 1,
      },
    ]);
  }, []);

  const handleSearchProduct = useCallback(
    (name: string) => {
      if (name === '') {
        setProductsDB([
          {
            id: '1',
            description: 'Lorem Impsum is simply dummy',
            name: 'Armario Muito bonito',
            image:
              'https://www.novamaqmoveis.com.br/wp-content/uploads/2018/08/armario-alto-diretor.png',
            price: 100,
            quantity: 1,
          },
          {
            id: '2',
            description: 'Lorem Impsum is simply dummy',
            name: 'Cadeira de Jardim',
            image: cadeira,
            price: 100,
            quantity: 1,
          },
          {
            id: '3',
            description: 'Lorem Impsum is simply dummy',
            name: 'Cadeira simples',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png',
            price: 100,
            quantity: 1,
          },
          {
            id: '4',
            description: 'Lorem Impsum is simply dummy',
            name: 'Cadeira de Escritório',
            image:
              'https://www.cadeirasparaescritorio.ind.br/media/product/ebd/cadeira-executiva-para-escritorio-base-giratoria-e-regulagem-de-altura-cp20-space-cinza-081.png',
            price: 50,
            quantity: 1,
          },
          {
            id: '5',
            description: 'Lorem Impsum is simpladdToCarty dummy',
            name: 'Banco Alto',
            image:
              'https://e7.pngegg.com/pngimages/58/362/png-clipart-brown-wooden-stool-chair-furniture-couch-chair-stool-bar-stool-thumbnail.png',
            price: 1650.9,
            quantity: 1,
          },
        ]);
      } else {
        const prodSearched = productsDB.filter(prod =>
          prod.name.includes(name),
        );
        setProductsDB(prodSearched);
      }
    },
    [productsDB],
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
              isVisible={showDetails}
              onClick={() => {
                setShowCart(!showCart);
              }}
            >
              <FaShoppingBag size={35} />
              <span>{getTotal().counter}</span>
            </ButtonContainer>

            <CartCollapse isVisible={showCart}>
              <ul>
                {products.map(product => (
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        removeToCart(product.id);
                        toast('Item removido do carrinho com sucesso !', {
                          type: 'success',
                          position: 'top-left',
                        });
                      }}
                    >
                      <FaTrash size={20} />
                    </button>
                    <img src={product.image} alt="cadeira" />
                    <div>
                      <span>{product.name}</span>
                      <h3>
                        {Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(product.price)}
                      </h3>
                    </div>

                    <h2>x{product.quantity}</h2>
                  </li>
                ))}
              </ul>

              <h2>
                Total:{' '}
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(getTotal().total)}
              </h2>

              <button
                type="button"
                onClick={() => {
                  clearCart();
                  setShowCart(false);
                  toast('Pedido Finalizado com sucesso', {
                    type: 'success',
                  });
                }}
              >
                Finalizar Pedido
              </button>
            </CartCollapse>
          </ActionItems>

          <h1>Encontre os melhores produtos</h1>

          <ProductsList>
            {productsDB.map(prod => (
              <Product
                key={prod.id}
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
