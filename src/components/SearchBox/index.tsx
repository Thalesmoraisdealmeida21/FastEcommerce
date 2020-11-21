import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { ContainerInput } from './styles';

const SearchBox: React.FC = () => {
  return (
    <ContainerInput>
      <input type="text" placeholder="Pesquise o seu produto aqui" />
      <FaSearch size={24} color="#BABABA" />
    </ContainerInput>
  );
};

export default SearchBox;
