import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style.scss'

const IconProfile = props => {
  return (
    <div className={classNames('icon-profile', props.className, { 'active-icon-profile': props.active })}>
      <i>{props.icon()}</i>
      <label>{props.label}</label>
    </div>
  )
}

IconProfile.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.func,
  label: PropTypes.string
}

export default IconProfile
