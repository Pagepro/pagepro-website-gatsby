import React from 'react';

import { ClientsStyled, ClientsItemStyled } from './styles';
import { IImage } from '../../interfaces/IImage';

export interface IClientItem extends IImage {
  src: string;
  alt: string;
}

interface IProps {
  items: IClientItem[];
}

const Clients: React.FC<IProps> = ({ items }) => (
  <ClientsStyled>
    {items.map(({ src, alt }) => (
      <ClientsItemStyled key={src}>
        <img src={src} alt={alt} />
      </ClientsItemStyled>
    ))}
  </ClientsStyled>
);

export default Clients;
