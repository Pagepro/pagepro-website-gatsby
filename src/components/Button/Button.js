import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {
  ButtonStyled,
  ButtonLabelStyled,
} from './ButtonStyledComponents'

class Button extends Component {
  render () {
    const {
      primary,
      secondary,
      big,
      medium,
      wide,
      left,
      btnUrl,
      btnLabel,
      func,
    } = this.props
    return (
      <ButtonStyled
        primary={primary}
        secondary={secondary}
        big={big}
        medium={medium}
        wide={wide}
        left={left}
        href={btnUrl}
        onClick={func}
      >
        <ButtonLabelStyled>
          {btnLabel}
        </ButtonLabelStyled>
      </ButtonStyled>
    )
  }
}

export default Button

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  big: PropTypes.bool,
  medium: PropTypes.bool,
  wide: PropTypes.bool,
  left: PropTypes.bool,
  btnUrl: PropTypes.string,
  btnLabel: PropTypes.string,
}
