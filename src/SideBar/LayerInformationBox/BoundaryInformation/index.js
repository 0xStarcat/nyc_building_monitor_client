import React from 'react'
import PropTypes from 'prop-types'

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
  TimeToResolveCallsIcon
} from '../../../SharedStyles/icons'
import IconRow from '../../SharedComponents/IconRow'
import '../SharedStyles/style.scss'

const BoundaryInformation = props => {
  if (!props.selectedObject) return null
  return (
    <div className="boundary-information">
      <div className="info-section">
        <div className="info-title">
          <h5>Summary</h5>
        </div>
        {!!props.selectedObject.incomeMedian2017 && (
          <IconRow icon={IncomeIcon}>
            The median income in 2017 was <span>${props.selectedObject.incomeMedian2017}</span>
          </IconRow>
        )}
        {!!props.selectedObject.rentMedian2017 && (
          <IconRow icon={RentIcon}>
            The median rent in 2017 was <span>${props.selectedObject.rentMedian2017}</span>
          </IconRow>
        )}
        {!!props.selectedObject.racePercentWhite2010 && (
          <IconRow icon={PopulationIcon}>
            The population in 2010 was <span>{props.selectedObject.racePercentWhite2010}%</span> white.
          </IconRow>
        )}
        {!!props.selectedObject.buildingsTotal && (
          <IconRow icon={BuildingIcon}>
            There are <span>{props.selectedObject.buildingsTotal}</span> buildings and{' '}
            <span>{props.selectedObject.residentialBuildingsTotal}</span> residential buildings in this area.{' '}
          </IconRow>
        )}
      </div>
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        {!!props.selectedObject.rentChange20112017 && (
          <IconRow icon={RentChangeIcon}>
            The rent changed by <span>${props.selectedObject.rentChange20112017}</span>
          </IconRow>
        )}
        {!!props.selectedObject.violationsTotal && (
          <IconRow icon={ViolationIcon}>
            There are <span>{props.selectedObject.violationsTotal} total violations.</span>
          </IconRow>
        )}
        {!!props.selectedObject.violationsTotal && (
          <IconRow icon={ViolationPerBuildingIcon}>
            There are <span>{props.selectedObject.violationsPerBuilding} violations per building.</span>
          </IconRow>
        )}
        {!!props.selectedObject.serviceCallsTotal && (
          <IconRow icon={ServiceCallIcon}>
            There are <span>{props.selectedObject.serviceCallsTotal} total 311-calls.</span>
          </IconRow>
        )}
        {!!props.selectedObject.serviceCallsTotal && (
          <IconRow icon={TimeToResolveCallsIcon}>
            It takes an average of {props.selectedObject.averageDaysToResolveServiceCalls} days for building departments
            to resolve 311-calls here.
          </IconRow>
        )}
        {!!props.selectedObject.serviceCallsTotal && (
          <IconRow icon={ServiceCallOpenIcon}>
            {props.selectedObject.serviceCallsPercentOpenOneMonth}% of current 311-calls have been open over 1 month.
          </IconRow>
        )}
      </div>
    </div>
  )
}

BoundaryInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default BoundaryInformation
