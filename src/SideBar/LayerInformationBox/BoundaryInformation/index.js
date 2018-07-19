import React from 'react'
import PropTypes from 'prop-types'

import '../SharedStyles/style.scss'

const BoundaryInformation = props => {
  return (
    <div className="boundary-information">
      <div className="info-section">
        <div className="info-title">
          <h5>Snapshot</h5>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.incomeMedian2017.label}</label>
          <div>${props.selectedObject.incomeMedian2017.value}</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.rentMedian2017.label}</label>
          <div>${props.selectedObject.rentMedian2017.value}</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.racePercentWhite2010.label}</label>
          <div>{props.selectedObject.racePercentWhite2010.value}%</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.buildingsTotal.label}</label>
          <div>{props.selectedObject.buildingsTotal.value}</div>
        </div>
      </div>
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.rentChange20112017.label}</label>
          <div>${props.selectedObject.rentChange20112017.value}</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.violationsPerBuilding.label}</label>
          <div>{props.selectedObject.violationsPerBuilding.value}</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.violationsTotal.label}</label>
          <div>{props.selectedObject.violationsTotal.value}</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.serviceCallsTotal.label}</label>
          <div>{props.selectedObject.serviceCallsTotal.value}</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.serviceCallsPercentOpenOneMonth.label}</label>
          <div>{props.selectedObject.serviceCallsPercentOpenOneMonth.value}%</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.salesTotal.label}</label>
          <div>{props.selectedObject.salesTotal.value}</div>
        </div>
        <div className="row-box">
          <label>{props.selectedObject.permitsTotal.label}</label>
          <div>{props.selectedObject.permitsTotal.value}</div>
        </div>
      </div>
    </div>
  )
}

BoundaryInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default BoundaryInformation
