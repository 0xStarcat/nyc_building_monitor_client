import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.scss'

const ButtonRow = props => {
  return <div className={classNames('button-row', props.className)}>{props.children}</div>
}

ButtonRow.propTypes = {
  className: PropTypes.string
}

export default ButtonRow
