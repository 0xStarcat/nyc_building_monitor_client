import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const IconHeader = props => {
  return (
    <div className="icon-header">
      <i>{props.icon()}</i>
      <h4>{props.children}</h4>
    </div>
  )
}

IconHeader.propTypes = {
  icon: PropTypes.func
}

export default IconHeader
