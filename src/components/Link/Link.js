import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {
  LinkLabelStyled,
  LinkIconStyled,
  LinkStyled
} from './LinkStyledComponents'
import GitHub from '../../assets/svg/GitHub'
import ArrowRight from '../../assets/svg/ArrowRight'


class Link extends Component {
  render () {
    const {
      withArrow,
      withGithub,
      alt,
      linkUrl,
      linkLabel,
    } = this.props
    return (
      <LinkStyled
        href={linkUrl}
        alt={alt}
      >
        {withGithub &&
          <LinkIconStyled>
            <GitHub
              fontSize="16px"
            />
          </LinkIconStyled>
        }
        <LinkLabelStyled>
          {linkLabel}
        </LinkLabelStyled>
        {withArrow &&
          <LinkIconStyled>
            <ArrowRight
              fontSize="7px"
            />
          </LinkIconStyled>
        }
      </LinkStyled>
    )
  }
}

export default Link

Link.propTypes = {
  linkUrl: PropTypes.string,
  linkLabel: PropTypes.string,
  withArrow: PropTypes.bool,
  withGithub: PropTypes.bool,
  alt: PropTypes.bool
}
