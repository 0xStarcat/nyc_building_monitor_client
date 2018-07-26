import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const IconButton = props => {
  return (
    <div className={`icon-button round hover-shadow ${props.className}`}>
      <i>{props.icon()}</i>
      <label>{props.label}</label>
    </div>
  )
}

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.func,
  label: PropTypes.string
}

export default IconButton
