import React from 'react'
import classNames from 'classnames'

import PropTypes from 'prop-types'

import './style.scss'

const IconRow = props => {
  return (
    <div className={classNames('icon-row', props.className, { 'active-icon-row': props.active })}>
      <i>{props.icon()}</i>
      <div>{props.children}</div>
    </div>
  )
}

IconRow.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.func
}

export default IconRow
