import React from 'react';

// import Cadeira from '../../assets/cadeira.png';
import {
  DeatilsToBuy,
  ProductContainer,
  Card,
  ImgAndDescription,
} from './styles';

interface Product {
  description: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
interface IProductProps {
  SetOpenDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setProductSelected: React.Dispatch<React.SetStateAction<Product>>;
  product: Product;
}

const Product: React.FC<IProductProps> = ({
  SetOpenDetail,
  product,
  setProductSelected,
}) => {
  return (
    <ProductContainer>
      <Card>
        <ImgAndDescription>
          <img src={product.image} alt="Cadeira" />

          <p>{product.description}</p>
        </ImgAndDescription>

        <DeatilsToBuy>
          <div>
            <p>{product.name}</p>
            <h4>
              {' '}
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </h4>
          </div>

          <button
            onClick={() => {
              setProductSelected(product);
              SetOpenDetail(true);
            }}
            type="button"
          >
            Ver Detalhes
          </button>
        </DeatilsToBuy>
      </Card>
    </ProductContainer>
  );
};

export default Product;
