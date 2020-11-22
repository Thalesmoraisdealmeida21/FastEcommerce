import React, { InputHTMLAttributes } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ContainerInput } from './styles';

type IProps = InputHTMLAttributes<HTMLInputElement>;

const SearchBox: React.FC<IProps> = ({ ...rest }) => {
  return (
    <ContainerInput>
      <input {...rest} type="text" placeholder="Pesquise o seu produto aqui" />
      <FaSearch size={24} color="#BABABA" />
    </ContainerInput>
  );
};

export default SearchBox;
