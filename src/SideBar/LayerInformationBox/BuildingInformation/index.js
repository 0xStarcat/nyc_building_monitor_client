import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewFetchButton from '../../SharedComponents/SwitchViewFetchButton'

import { SIDEBAR_BOUNDARY_INFO, SCOPE_VIOLATIONS, SCOPE_SERVICE_CALLS } from '../../../Store/AppState/actions'

import { readViolationsByBuilding } from '../../../Store/Violations/actions'
import { readServiceCallsByBuilding } from '../../../Store/ServiceCalls/actions'
import { readSalesByBuilding } from '../../../Store/Sales/actions'

import {
  IncomeIcon,
  RentIcon,
  PopulationIcon,
  BuildingIcon,
  RentChangeIcon,
  ViolationIcon,
  ViolationPerBuildingIcon,
  ServiceCallIcon,
  ServiceCallOpenIcon,
  TimeToResolveCallsIcon,
  BuildingClassIcon
} from '../../../SharedStyles/icons'
import IconRow from '../../SharedComponents/IconRow'

import { convertBuildingCodeToDescription } from './utils/buildingInformationUtils.js'

import '../SharedStyles/style.scss'
import './style.scss'

const BuildingInformation = props => {
  if (!props.selectedObject) return null

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
        <IconRow icon={BuildingClassIcon}>
          This building class is:{' '}
          <span>
            {props.selectedObject.buildingClass} which is labeled as:{' '}
            <span className="building-class-description">
              {convertBuildingCodeToDescription(props.selectedObject.buildingClass)}
            </span>
          </span>
        </IconRow>
        <SwitchViewFetchButton action={getViolations} viewSwitch={SCOPE_VIOLATIONS}>
          <IconRow icon={ViolationIcon}>
            There are <span>{props.selectedObject.violationsTotal} total violations.</span>
          </IconRow>
          <div className="icon-row-text-align">View Details</div>
        </SwitchViewFetchButton>
        <SwitchViewFetchButton action={getServiceCalls} viewSwitch={SCOPE_SERVICE_CALLS}>
          <IconRow icon={ServiceCallIcon}>
            There are <span>{props.selectedObject.serviceCallsTotal} total 311-calls.</span>
          </IconRow>
          <div className="icon-row-text-align">View Details</div>
        </SwitchViewFetchButton>
        {props.selectedObject.serviceCallsTotal && (
          <SwitchViewFetchButton>
            <IconRow icon={TimeToResolveCallsIcon}>
              It takes an average of {props.selectedObject.averageDaysToResolveServiceCalls} days for the city to
              resolve 311-calls here.
            </IconRow>
            <div className="icon-row-text-align">View Details</div>
          </SwitchViewFetchButton>
        )}
        {props.selectedObject.serviceCallsTotal && (
          <SwitchViewFetchButton>
            <IconRow icon={ServiceCallOpenIcon}>
              {props.selectedObject.serviceCallsPercentOpenOneMonth}% of current 311-calls have been open over 1 month.
            </IconRow>
            <div className="icon-row-text-align">View Details</div>
          </SwitchViewFetchButton>
        )}
      </div>
    </div>
  )
}

BuildingInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default BuildingInformation
