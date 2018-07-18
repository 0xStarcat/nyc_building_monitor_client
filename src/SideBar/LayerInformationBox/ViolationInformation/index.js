import React from 'react'
import PropTypes from 'prop-types'

import '../SharedStyles/style.scss'

const ViolationInformation = props => {
  return (
    <div className="information-box">
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.source.label}</label>
          <div>{props.selectedObject.source.value}</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.date.label}</label>
          <div>{props.selectedObject.date.value}</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.penalty.label}</label>
          <div>{props.selectedObject.penalty.value}</div>
        </div>
      </div>
    </div>
  )
}

ViolationInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default ViolationInformation
