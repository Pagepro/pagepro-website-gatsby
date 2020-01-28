import React from 'react';

import { TechnologiesStyled, TechnologiesItemStyled } from './styles';
import { IImage } from '../../interfaces/IImage';

export interface ITechnologyItem {
  items: IImage[];
}

const Technologies: React.FC<ITechnologyItem> = ({ items }) => (
  <TechnologiesStyled>
    {items.map(({ src, alt }) => (
      <TechnologiesItemStyled key={alt}>
        <img src={src} alt={alt} />
      </TechnologiesItemStyled>
    ))}
  </TechnologiesStyled>
);

export default Technologies;
