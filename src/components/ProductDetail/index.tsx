import React from 'react';
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';
// import cadeira from '../../assets/cadeira.png';

import {
  ContainerDetail,
  Content,
  DetailContainer,
  QuantityContainer,
  ContainerInput,
  Button,
  ButtonCustomDetail,
} from './style';

interface Product {
  description: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface IDetail {
  showDetails: boolean;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}
const ProductDetail: React.FC<IDetail> = ({
  showDetails,
  setShowDetail,
  product,
  setProduct,
}) => {
  return (
    <ContainerDetail isVisible={showDetails}>
      <ButtonCustomDetail
        type="button"
        onClick={() => {
          setShowDetail(false);
        }}
      >
        <FaArrowRight size={20} color="#fff" />
      </ButtonCustomDetail>

      <Content>
        <img src={product.image} alt="cadeira" />

        <DetailContainer>
          <h3>{product.name}</h3>
          <h4>
            {' '}
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </h4>

          <p>{product.description}</p>

          <QuantityContainer>
            <h2>Quantidade</h2>
            <ContainerInput>
              <button
                type="button"
                onClick={() => {
                  setProduct({ ...product, quantity: product.quantity - 1 });
                }}
              >
                <FaMinus color="#606a6b" />
              </button>
              <input
                value={product.quantity}
                type="number"
                onChange={evt => {
                  setProduct({
                    ...product,
                    quantity: Number(evt.target.value),
                  });
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setProduct({ ...product, quantity: product.quantity + 1 });
                }}
              >
                <FaPlus color="#606a6b" />
              </button>
            </ContainerInput>
          </QuantityContainer>

          <Button type="button">Adicionar no Carrinho</Button>
        </DetailContainer>
      </Content>
    </ContainerDetail>
  );
};

export default ProductDetail;
