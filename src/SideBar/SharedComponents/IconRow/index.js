import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const IconRow = props => {
  return (
    <div className={`icon-row ${props.className}`}>
      <i>{props.icon()}</i>
      <p>{props.children}</p>
    </div>
  )
}

IconRow.propTypes = {
  icon: PropTypes.func
}

export default IconRow
