import React from 'react'
import _map from 'lodash/map'

import {
  ColorsListStyled,
  ColorsListItemStyled,
  ColorBgStyled,
  ColorLabelStyled,
} from './ColorStyledComponents'
import theme from '../../themes/theme'

const Color = () => (
  <ColorsListStyled>
    {_map(theme.color, (value, key) => (
      <ColorsListItemStyled
        key={key}
      >
        <ColorBgStyled
          style={{backgroundColor: value}}
        />
          <ColorLabelStyled>
            {key}
          </ColorLabelStyled>
          <ColorLabelStyled>
            {value}
          </ColorLabelStyled>
      </ColorsListItemStyled>
    ))}
  </ColorsListStyled>
)

export default Color
