import React from 'react';

import { SliderStyled, SliderItemStyled } from './styles';
import InfoBox, { IInfoBox } from '../InfoBox';

interface IProps {
  items: IInfoBox[];
}

const Slider = ({ items }: IProps) => (
  <SliderStyled overflow="auto">
    {items.map(infoBox => (
      <SliderItemStyled width="15rem" p="1.5rem" bg="white" key={infoBox.alt}>
        <InfoBox {...infoBox}>{infoBox.children}</InfoBox>
      </SliderItemStyled>
    ))}
  </SliderStyled>
);

export default Slider;
