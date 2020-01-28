import React from 'react';

import { ClientsStyled, ClientsItemStyled } from './styles';
import { IImage } from '../../interfaces/IImage';

export interface IClientItem {
  items: IImage[];
}

const Clients: React.FC<IClientItem> = ({ items }) => (
  <ClientsStyled>
    {items.map(({ src, alt }) => (
      <ClientsItemStyled key={src}>
        <img src={src} alt={alt} />
      </ClientsItemStyled>
    ))}
  </ClientsStyled>
);

export default Clients;
