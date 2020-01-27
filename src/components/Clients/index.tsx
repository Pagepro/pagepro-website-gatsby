import React from 'react';

import { ClientsStyled, ClientsItemStyled } from './styles';

export interface IClientItem {
  src: string;
  alt: string;
}

interface IProps {
  items: IClientItem[];
}

const Clients: React.FC<IProps> = ({ items }) => (
  <ClientsStyled>
    {items.map(({ src, alt }) => (
      <ClientsItemStyled key={alt}>
        <img src={src} alt={alt} />
      </ClientsItemStyled>
    ))}
  </ClientsStyled>
);

export default Clients;
