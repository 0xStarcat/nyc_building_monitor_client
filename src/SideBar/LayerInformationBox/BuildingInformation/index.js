import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewFetchButton from '../../SharedComponents/SwitchViewFetchButton'

import {
  SIDEBAR_BOUNDARY_INFO,
  SIDEBAR_VIOLATION_INFO,
  SIDEBAR_SERVICE_CALL_INFO,
  SIDEBAR_SERVICE_CALL_OPEN_INFO,
  SIDEBAR_SALE_INFO
} from '../../../Store/AppState/actions'

import { readViolationsByBuilding } from '../../../Store/Violations/actions'
import { readServiceCallsByBuilding } from '../../../Store/ServiceCalls/actions'
import { readSalesByBuilding } from '../../../Store/Sales/actions'

import '../SharedStyles/style.scss'

const BuildingInformation = props => {
  const getViolations = () => {
    return readViolationsByBuilding(props.selectedObject.id)
  }

  const getServiceCalls = () => {
    return readServiceCallsByBuilding(props.selectedObject.id)
  }

  const getSales = () => {
    return readSalesByBuilding(props.selectedObject.id)
  }

  return (
    <div className="building-information">
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        <SwitchViewFetchButton action={getViolations} viewSwitch={SIDEBAR_VIOLATION_INFO}>
          <div className="row-box">
            <label>Total Violations</label>
            <div>{props.selectedObject.violationsTotal}</div>
          </div>
        </SwitchViewFetchButton>
        <SwitchViewFetchButton action={getServiceCalls} viewSwitch={SIDEBAR_SERVICE_CALL_INFO}>
          <div className="row-box">
            <label>Total 311 Calls</label>
            <div>{props.selectedObject.serviceCallsTotal}</div>
          </div>
          <div className="row-box">
            <label>311 Calls Still Open ( > 1 month)</label>
            <div>{props.selectedObject.serviceCallsPercentOpenOneMonth}%</div>
          </div>
        </SwitchViewFetchButton>
      </div>
    </div>
  )
}

BuildingInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default BuildingInformation
