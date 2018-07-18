import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewFetchButton from '../SharedComponents/SwitchViewFetchButton'

import {
  SIDEBAR_BOUNDARY_INFO,
  SIDEBAR_VIOLATION_INFO,
  SIDEBAR_SERVICE_CALL_INFO,
  SIDEBAR_SERVICE_CALL_OPEN_INFO,
  SIDEBAR_SALE_INFO
} from '../../../Store/AppState/actions'

import { readViolationsByBuilding } from '../../../Store/Violations/actions'

import '../SharedStyles/style.scss'

const BoundaryInformation = props => {
  const getViolations = () => {
    return readViolationsByBuilding(props.selectedObject.id)
  }

  return (
    <div className="information-box">
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        <SwitchViewFetchButton action={getViolations} viewSwitch={SIDEBAR_VIOLATION_INFO}>
          <div className="row-box">
            <label>{props.selectedObject.violationsTotal.label}</label>
            <div>{props.selectedObject.violationsTotal.value}</div>
          </div>
        </SwitchViewFetchButton>
        <SwitchViewFetchButton viewSwitch={SIDEBAR_SERVICE_CALL_INFO}>
          <div className="row-box">
            <label>{props.selectedObject.serviceCallsTotal.label}</label>
            <div>{props.selectedObject.serviceCallsTotal.value}</div>
          </div>
        </SwitchViewFetchButton>
        <SwitchViewFetchButton viewSwitch={SIDEBAR_SERVICE_CALL_INFO}>
          <div className="row-box">
            <label>{props.selectedObject.serviceCallsPercentOpenOneMonth.label}</label>
            <div>{props.selectedObject.serviceCallsPercentOpenOneMonth.value}%</div>
          </div>
        </SwitchViewFetchButton>
        <SwitchViewFetchButton viewSwitch={SIDEBAR_SALE_INFO}>
          <div className="row-box">
            <label>{props.selectedObject.salesTotal.label}</label>
            <div>{props.selectedObject.salesTotal.value}</div>
          </div>
        </SwitchViewFetchButton>
      </div>
    </div>
  )
}

BoundaryInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default BoundaryInformation
