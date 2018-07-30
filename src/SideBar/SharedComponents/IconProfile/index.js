import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style.scss'

const IconProfile = props => {
  return (
    <div className={classNames('icon-profile', props.className)}>
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
