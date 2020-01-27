import React from 'react';

import { BulletListStyled, BulletListItemStyled } from './styles';
import { Typo7 } from '../Typography';

interface IProps {
  items: string[];
}

const BulletList: React.FC<IProps> = ({ items }) => (
  <BulletListStyled>
    {items.map(item => (
      <BulletListItemStyled key={item}>
        <Typo7>{item}</Typo7>
      </BulletListItemStyled>
    ))}
  </BulletListStyled>
);

BulletList.defaultProps = {
  items: [],
};

export default BulletList;
