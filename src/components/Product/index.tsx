import React from 'react';

import Cadeira from '../../assets/cadeira.png';
import {
  DeatilsToBuy,
  ProductContainer,
  Card,
  ImgAndDescription,
} from './styles';

const Product: React.FC = () => {
  return (
    <ProductContainer>
      <Card>
        <ImgAndDescription>
          <img src={Cadeira} alt="Cadeira" />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.{' '}
          </p>
        </ImgAndDescription>

        <DeatilsToBuy>
          <div>
            <span>Cadeira de Jardim</span>
            <h4> R$ 100,00</h4>
          </div>

          <button type="button">Ver Detalhes</button>
        </DeatilsToBuy>
      </Card>
    </ProductContainer>
  );
};

export default Product;
