import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const IconProfile = props => {
  return (
    <div className={`icon-profile ${props.className ? props.className : ''}`}>
      <i>{props.icon()}</i>
      <label>{props.label}</label>
    </div>
  )
}

IconProfile.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.func,
  label: PropTypes.string
}

export default IconProfile
