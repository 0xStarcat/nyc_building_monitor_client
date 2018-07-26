import React from 'react'
import PropTypes from 'prop-types'

const IconRow = props => {
  return (
    <div className="icon-row">
      <div className="row-box">
        <i>{props.icon()}</i>
        <p>{props.children}</p>
      </div>
    </div>
  )
}

IconRow.propTypes = {
  icon: PropTypes.func
}

export default IconRow
