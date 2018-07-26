import React from 'react'
import PropTypes from 'prop-types'

const ViolationRow = props => {
  return (
    <div className="row-box violation-row">
      <div className="violation-cell">
        <label>Date</label>
        <div>{props.feature.properties.date}</div>
      </div>
      <div className="violation-cell">
        <label>Penaltu</label>
        <div>{props.feature.properties.penalty}</div>
      </div>
    </div>
  )
}

ViolationRow.propTypes = {
  feature: PropTypes.object
}

export default ViolationRow
