import React from 'react'
import PropTypes from 'prop-types'

import '../BoundaryInformation/style.scss'

const BoundaryInformation = props => {
  return (
    <div className="information-box">
      <div className="info-section">
        <div className="title">
          <h5>2010 - Present</h5>
        </div>
        <div className="row-box">
          <label>Total Violations</label>
          <div>{props.selectedLayer.violationsTotal}</div>
        </div>
        <div className="row-box">
          <label>Total 311 Calls</label>
          <div>{props.selectedLayer.serviceCallsTotal}</div>
        </div>
        <div className="row-box">
          <label>311 Calls Open ( > 1 Month)</label>
          <div>{props.selectedLayer.serviceCallsPercentOpenOneMonth}%</div>
        </div>
        <div className="row-box">
          <label>Total Sales</label>
          <div>{props.selectedLayer.salesTotal}</div>
        </div>
      </div>
    </div>
  )
}

BoundaryInformation.propTypes = {
  selectedLayer: PropTypes.object
}

export default BoundaryInformation
