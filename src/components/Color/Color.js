import React from 'react'
import _map from 'lodash/map'

import {
  ColorsList,
  ColorsListItem,
  ColorBg,
  ColorLabel,
} from './ColorStyledComponents'
import theme from '../../themes/theme'

const Color = () => (
  <ColorsList>
    {_map(theme.color, (value, key) => (
      <ColorsListItem
        key={key}
      >
        <ColorBg
          style={{backgroundColor: value}}
        />
          <ColorLabel>
            {key}
          </ColorLabel>
          <ColorLabel>
            {value}
          </ColorLabel>
      </ColorsListItem>
    ))}
  </ColorsList>
)

export default Color
