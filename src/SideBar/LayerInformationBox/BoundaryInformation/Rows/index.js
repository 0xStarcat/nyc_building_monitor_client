import React from 'react'
import classNames from 'classnames'

import IconRow from '../../../SharedComponents/IconRow'

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
} from '../../../../SharedStyles/icons'

import {
  incomeValueClass,
  rentValueClass,
  raceValueClass,
  rentChangeValueClass,
  violationValueClass,
  violationPerBldgValueClass,
  serviceCallValueClass,
  responseTimeValueClass,
  open311CallValueClass,
  serviceCallPerBuildingValueClass
} from '../../../../SharedUtilities/rowHelpers.js'

export const IncomeRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={IncomeIcon}>
      {props.value ? (
        <div>
          <span>The median income in 2017 was </span>
          <span className={classNames('value-text', incomeValueClass(props.value))}>${props.value}</span>
        </div>
      ) : (
        <span>(No income data available)</span>
      )}
    </IconRow>
  )
}

export const RentRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={RentIcon}>
      {props.value ? (
        <div>
          <span>The median rent in 2017 was </span>
          <span className={classNames('value-text', rentValueClass(props.value))}>${props.value}</span>
        </div>
      ) : (
        <span>(No rent data available)</span>
      )}
    </IconRow>
  )
}

export const RaceRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={PopulationIcon}>
      {props.value ? (
        <div>
          <span>The population in 2010 was </span>
          <span className={classNames('value-text', raceValueClass(props.value))}>{props.value}%</span> white.
        </div>
      ) : (
        <span>(No race data available)</span>
      )}
    </IconRow>
  )
}

export const TotalBuildingsRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={BuildingIcon}>
      {props.value1 >= 0 ? (
        <div>
          <span>
            There are <span className="value-text value-blank">{props.value1}</span> buildings and{' '}
            <span className="value-text value-blank">{props.value2}</span> residential buildings in this area.
          </span>
        </div>
      ) : (
        <span>(No building data available)</span>
      )}
    </IconRow>
  )
}

export const RentChangeRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={RentChangeIcon}>
      {props.value && props.value !== 'NaN' ? (
        <div>
          <span>
            The rent changed by{' '}
            <span className={classNames('value-text', rentChangeValueClass(props.value))}>${props.value}</span>
          </span>
        </div>
      ) : (
        <span>(No historical rent data available)</span>
      )}
    </IconRow>
  )
}

export const TotalViolationsRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={ViolationIcon}>
      {props.value1 >= 0 ? (
        <div>
          <span>
            There are{' '}
            <span className={classNames('value-text', violationPerBldgValueClass(props.value2))}>{props.value2}</span>{' '}
            violations per building and
            <span className={classNames('value-text', violationValueClass(props.value1, props.sidebarScope))}>
              {props.value1}
            </span>
            total.
          </span>
        </div>
      ) : (
        <span>(No violation data available)</span>
      )}
    </IconRow>
  )
}

export const ViolationsPerBuildingRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={ViolationPerBuildingIcon}>
      {props.value >= 0 ? (
        <div>
          <span>
            There are{' '}
            <span className={classNames('value-text', violationPerBldgValueClass(props.value))}>{props.value}</span>{' '}
            violations per building.
          </span>
        </div>
      ) : (
        <span>(No calculated data available)</span>
      )}
    </IconRow>
  )
}

export const TotalServiceCallsRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={ServiceCallIcon}>
      {props.value1 >= 0 ? (
        <div>
          <span>
            There are{' '}
            <span
              className={classNames('value-text', serviceCallPerBuildingValueClass(props.value2, props.sidebarScope))}
            >
              {props.value2}
            </span>{' '}
            311-calls per building and
            <span className={classNames('value-text', serviceCallValueClass(props.value1, props.sidebarScope))}>
              {props.value1}
            </span>{' '}
            total.
          </span>
        </div>
      ) : (
        <span>(No 311-call data available)</span>
      )}
    </IconRow>
  )
}

export const TimeToResolveCallsRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={TimeToResolveCallsIcon}>
      {props.value >= 0 ? (
        <div>
          <span>
            It takes an average of{' '}
            <span className={classNames('value-text', responseTimeValueClass(props.value))}>{props.value}</span> days
            for the city to resolve 311-calls here.
          </span>
        </div>
      ) : (
        <span>(No response time data available)</span>
      )}
    </IconRow>
  )
}

export const ServiceCallsOpenRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={ServiceCallOpenIcon}>
      {props.value >= 0 ? (
        <div>
          <span className={classNames('value-text', open311CallValueClass(props.value))}>{props.value}%</span>
          <span> of unresolved 311-calls have been open over 1 month.</span>
        </div>
      ) : (
        <span>(No open 311 call available)</span>
      )}
    </IconRow>
  )
}
