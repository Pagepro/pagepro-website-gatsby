import React from 'react';

import { TechnologiesStyled, TechnologiesItemStyled } from './styles';

interface ITechnologiesItem {
  src: string;
  alt: string;
}

interface IProps {
  items: ITechnologiesItem[];
}

const Technologies: React.FC<IProps> = ({ items }) => (
  <TechnologiesStyled>
    {items.map(({ src, alt }) => (
      <TechnologiesItemStyled key={alt}>
        <img src={src} alt={alt} />
      </TechnologiesItemStyled>
    ))}
  </TechnologiesStyled>
);

export default Technologies;
