import React from 'react';

import theme from '../../themes/theme';

const Color = () => {
  const { colors } = theme;

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexShrink: 0,
        width: 'auto',
      }}
    >
      {Object.keys(colors).map(key => (
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '1rem',
            textAlign: 'center',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            fontWeight: 500,
            flexDirection: 'column',
          }}
          key={key}
        >
          {colors[key] === colors.white ? (
            <div
              style={{
                backgroundColor: colors[key],
                width: '6.25rem',
                height: '4rem',
                border: '1px solid #eee',
                marginBottom: '1rem',
                borderRadius: '0.375rem',
              }}
            />
          ) : (
            <div
              style={{
                backgroundColor: colors[key],
                width: '6.25rem',
                height: '4rem',
                marginBottom: '1rem',
                borderRadius: '0.375rem',
              }}
            />
          )}
          <p>{key}</p>
          <p>{colors[key]}</p>
        </li>
      ))}
    </ul>
  );
};

export default Color;
