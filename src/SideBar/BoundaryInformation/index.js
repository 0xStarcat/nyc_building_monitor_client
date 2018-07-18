import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const BoundaryInformation = props => {
  return (
    <div className="information-box">
      <div className="info-section">
        <div className="title">
          <h5>Snapshot</h5>
        </div>
        <div className="row-box">
          <label>Median Income (2017)</label>
          <div>${props.selectedLayer.incomeMedian2017}</div>
        </div>
        <div className="row-box">
          <label>Median Rent (2017)</label>
          <div>${props.selectedLayer.rentMedian2017}</div>
        </div>
        <div className="row-box">
          <label>White Population (2010)</label>
          <div>{props.selectedLayer.racePercentWhite2010}%</div>
        </div>
        <div className="row-box">
          <label>Total Residential Buildings</label>
          <div>{props.selectedLayer.buildingsTotal}</div>
        </div>
      </div>
      <div className="info-section">
        <div className="title">
          <h5>2010 - Present</h5>
        </div>
        <div className="row-box">
          <label>Rent Change</label>
          <div>${props.selectedLayer.rentChange20112017}</div>
        </div>
        <div className="row-box">
          <label>Violation Rate</label>
          <div>{props.selectedLayer.violationsPerBuilding} / bldg</div>
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
        <div className="row-box">
          <label>Total Permits</label>
          <div>{props.selectedLayer.permitsTotal}</div>
        </div>
      </div>
    </div>
  )
}

BoundaryInformation.propTypes = {
  selectedLayer: PropTypes.object
}

export default BoundaryInformation
