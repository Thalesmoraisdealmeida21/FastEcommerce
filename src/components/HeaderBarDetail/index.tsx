import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ContainerHeaderBar } from './styles';

const HeaderBarDetail: React.FC = () => {
  return (
    <ContainerHeaderBar>
      <header>
        <span>Desenvolvido por thales.morais21@gmail.com</span>

        <div>
          <a href="https://www.linkedin.com/in/thales-morais/">
            <FaLinkedin size={22} />
          </a>

          <a href="https://github.com/Thalesmoraisdealmeida21">
            <FaGithub size={22} />
          </a>
        </div>
      </header>
    </ContainerHeaderBar>
  );
};

export default HeaderBarDetail;
