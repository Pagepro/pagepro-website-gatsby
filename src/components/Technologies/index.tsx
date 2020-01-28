import React from 'react';

import { TechnologiesStyled, TechnologiesItemStyled } from './styles';
import { IImage } from '../../interfaces/IImage';

export interface ITechnologyItem extends IImage {
  src: string;
  alt: string;
}

interface IProps {
  items: ITechnologyItem[];
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
