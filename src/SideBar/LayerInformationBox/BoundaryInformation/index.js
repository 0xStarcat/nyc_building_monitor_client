import React from 'react'
import PropTypes from 'prop-types'

import '../SharedStyles/style.scss'

const BoundaryInformation = props => {
  return (
    <div className="information-box">
      <div className="info-section">
        <div className="info-title">
          <h5>Snapshot</h5>
        </div>
        <div className="row-box">
          <label>Median Income (2017)</label>
          <div>${props.selectedObject.incomeMedian2017}</div>
        </div>
        <div className="row-box">
          <label>Median Rent (2017)</label>
          <div>${props.selectedObject.rentMedian2017}</div>
        </div>
        <div className="row-box">
          <label>White Population (2010)</label>
          <div>{props.selectedObject.racePercentWhite2010}%</div>
        </div>
        <div className="row-box">
          <label>Total Residential Buildings</label>
          <div>{props.selectedObject.buildingsTotal}</div>
        </div>
      </div>
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        <div className="row-box">
          <label>Rent Change</label>
          <div>${props.selectedObject.rentChange20112017}</div>
        </div>
        <div className="row-box">
          <label>Violation Rate</label>
          <div>{props.selectedObject.violationsPerBuilding} / bldg</div>
        </div>
        <div className="row-box">
          <label>Total Violations</label>
          <div>{props.selectedObject.violationsTotal}</div>
        </div>
        <div className="row-box">
          <label>Total 311 Calls</label>
          <div>{props.selectedObject.serviceCallsTotal}</div>
        </div>
        <div className="row-box">
          <label>311 Calls Open ( > 1 Month)</label>
          <div>{props.selectedObject.serviceCallsPercentOpenOneMonth}%</div>
        </div>
        <div className="row-box">
          <label>Total Sales</label>
          <div>{props.selectedObject.salesTotal}</div>
        </div>
        <div className="row-box">
          <label>Total New Building Permits</label>
          <div>{props.selectedObject.permitsTotal}</div>
        </div>
      </div>
    </div>
  )
}

BoundaryInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default BoundaryInformation
