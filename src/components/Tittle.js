import React from 'react';
import { TitleWrapper } from './Title.style';

const Tittle = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default Tittle;
