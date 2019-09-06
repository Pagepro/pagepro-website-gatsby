import React from 'react'
import _map from 'lodash/map'

import theme from '../../themes/theme'

const Color = () => (
  <ul style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexShrink: '0',
    width: 'auto'
  }}>
    {_map(theme.color, (value, key) => (
      <li style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '16px',
          textAlign: 'center',
          fontSize: '12px',
          textTransform: 'uppercase',
          fontWeight: '500'
        }}
        key={key}
      >
        <div
          style={{
            backgroundColor: value,
            width: '120px',
            height: '72px',
            marginBottom: '16px',
            borderRadius: '6px'
          }}
        />
          <p>{key}</p>
          <p>{value}</p>
      </li>
    ))}
  </ul>
)

export default Color
