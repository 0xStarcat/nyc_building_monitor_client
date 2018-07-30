import React from 'react'
import PropTypes from 'prop-types'

const LegendGroup = props => {
  return (
    <div className="legend-group">
      <span className="scale-marker" style={{ backgroundColor: props.color }} />
      <label className="scale-label">{props.label}</label>
    </div>
  )
}

LegendGroup.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string
}

export default LegendGroup
