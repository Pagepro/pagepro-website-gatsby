import React from 'react';

import { SliderStyled, SliderItemStyled } from './styles';
import InfoBox, { IInfoBox } from '../InfoBox';

interface IProps {
  specialities: IInfoBox[];
}
const Slider = ({ specialities }: IProps) => (
  <SliderStyled overflow="auto">
    {specialities.map(infoBox => (
      <SliderItemStyled width="15rem" p="1.5rem" bg="white" key={infoBox.alt}>
        <InfoBox {...infoBox}>{infoBox.children}</InfoBox>
      </SliderItemStyled>
    ))}
  </SliderStyled>
);

export default Slider;
