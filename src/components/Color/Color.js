import React from 'react'

import PropTypes from 'prop-types'
import theme from '../../themes/theme'

const Color = () => {
  const colors = theme.color
  return (
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      flexShrink: '0',
      width: 'auto'
    }}>
      {Object.keys(colors).map((key) => (
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
              backgroundColor: colors[key],
              width: '100px',
              height: '64px',
              marginBottom: '16px',
              borderRadius: '6px'
            }}
          />
            <p>{key}</p>
            <p>{colors[key]}</p>
        </li>
      ))}
    </ul>
  )
}

Color.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
  }))
}

export default Color
