import React from 'react'
import PropTypes from 'prop-types'

const ViolationRow = props => {
  return (
    <div className="row-box violation-row">
      <div className="violation-cell">
        <label>{props.feature.properties.date.label}</label>
        <div>{props.feature.properties.date.value}</div>
      </div>
      <div className="violation-cell">
        <label>{props.feature.properties.penalty.label}</label>
        <div>{props.feature.properties.penalty.value}</div>
      </div>
    </div>
  )
}

ViolationRow.propTypes = {
  feature: PropTypes.object
}

export default ViolationRow
