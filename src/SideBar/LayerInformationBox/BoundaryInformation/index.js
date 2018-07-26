import React from 'react'
import PropTypes from 'prop-types'

import { MoneyIcon } from '../../../SharedStyles/icons'

import '../SharedStyles/style.scss'

const BoundaryInformation = props => {
  if (!props.selectedObject) return null
  return (
    <div className="boundary-information">
      <div className="info-section">
        <div className="info-title">
          <h5>Summary</h5>
        </div>
        <div className="row-box">
          <i>
            <MoneyIcon />
          </i>
          <p>
            The median income in 2017 was <span>${props.selectedObject.incomeMedian2017}</span>
          </p>
        </div>
        <div className="row-box">
          <label>Median Rent 2017</label>
          <div>${props.selectedObject.rentMedian2017}</div>
        </div>
        <div className="row-box">
          <label>White Population (%) 2010</label>
          <div>{props.selectedObject.racePercentWhite2010}%</div>
        </div>
        <div className="row-box">
          <label>Total Buildings</label>
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
          <label>Violations Rate (per Bldg)</label>
          <div>{props.selectedObject.violationsPerBuilding}</div>
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
          <label>311 Calls Still Open ( > 1 month)</label>
          <div>{props.selectedObject.serviceCallsPercentOpenOneMonth}%</div>
        </div>
      </div>
    </div>
  )
}

BoundaryInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default BoundaryInformation
