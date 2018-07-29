import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const ButtonRow = props => {
  return <div className={`button-row ${props.className ? props.className : ''}`}>{props.children}</div>
}

ButtonRow.propTypes = {}

export default ButtonRow
