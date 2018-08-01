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

const incomeValueClass = value => {
  if (value > 90000) return 'value-5'
  if (value > 70000) return 'value-4'
  if (value > 50000) return 'value-3'
  if (value > 30000) return 'value-2'
  if (value >= 0) return 'value-1'
}

const rentValueClass = value => {
  if (value > 2400) return 'value-5'
  if (value > 2000) return 'value-4'
  if (value > 1600) return 'value-3'
  if (value > 1200) return 'value-2'
  if (value >= 0) return 'value-1'
}

const raceValueClass = value => {
  if (value > 80) return 'value-5'
  if (value > 60) return 'value-4'
  if (value > 40) return 'value-3'
  if (value > 20) return 'value-2'
  if (value >= 0) return 'value-1'
}

const rentChangeValueClass = value => {
  if (value > 500) return 'value-5-diverge'
  if (value > 300) return 'value-4-diverge'
  if (value > 0) return 'value-3-diverge'
  if (value >= -100) return 'value-2-diverge'
  if (value < -100) return 'value-1-diverge'
}

const violationValueClass = value => {
  if (value > 2500) return 'value-5'
  if (value > 2000) return 'value-4'
  if (value > 1500) return 'value-3'
  if (value > 500) return 'value-2'
  if (value >= 0) return 'value-1'
}

const violationPerBldgValueClass = value => {
  if (value > 40) return 'value-5'
  if (value > 30) return 'value-4'
  if (value > 20) return 'value-3'
  if (value > 10) return 'value-2'
  if (value >= 0) return 'value-1'
}

const serviceCallValueClass = value => {
  if (value > 4000) return 'value-5'
  if (value > 3000) return 'value-4'
  if (value > 2000) return 'value-3'
  if (value > 1000) return 'value-2'
  if (value >= 0) return 'value-1'
}

const responseTimeValueClass = value => {
  if (value > 120) return 'value-5'
  if (value > 90) return 'value-4'
  if (value > 60) return 'value-3'
  if (value > 30) return 'value-2'
  if (value >= 0) return 'value-1'
}

const open311CallValueClass = value => {
  if (value > 16) return 'value-5'
  if (value > 12) return 'value-4'
  if (value > 8) return 'value-3'
  if (value > 4) return 'value-2'
  if (value >= 0) return 'value-1'
}

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
      {props.value1 ? (
        <div>
          <span>
            There are <span>{props.value1}</span> buildings and <span>{props.value2}</span> residential buildings in
            this area.
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
      {props.value >= 0 ? (
        <div>
          <span>
            There are{' '}
            <span className={classNames('value-text', violationValueClass(props.value))}>
              {props.value} total violations.
            </span>
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
      {props.value >= 0 ? (
        <div>
          <span>
            There are{' '}
            <span className={classNames('value-text', serviceCallValueClass(props.value))}>{props.value}</span> total
            311-calls.
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
          <span> of current 311-calls have been open over 1 month.</span>
        </div>
      ) : (
        <span>(No open 311 call available)</span>
      )}
    </IconRow>
  )
}
