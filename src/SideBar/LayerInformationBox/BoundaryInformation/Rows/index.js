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

  return 'value-1'
}

const rentValueClass = value => {
  if (value > 2400) return 'value-5'
  if (value > 2000) return 'value-4'
  if (value > 1600) return 'value-3'
  if (value > 1200) return 'value-2'

  return 'value-1'
}

const raceValueClass = value => {
  if (value > 80) return 'value-5'
  if (value > 60) return 'value-4'
  if (value > 40) return 'value-3'
  if (value > 20) return 'value-2'

  return 'value-1'
}

const rentChangeValueClass = value => {
  if (value > 500) return 'value-5-diverge'
  if (value > 300) return 'value-4-diverge'
  if (value > 0) return 'value-3-diverge'
  if (value >= -100) return 'value-2-diverge'
  if (value < -100) return 'value-1-diverge'
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
      {props.value ? (
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
      There are <span>{props.value} total violations.</span>
    </IconRow>
  )
}

export const ViolationsPerBuildingRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={ViolationPerBuildingIcon}>
      There are <span>{props.value} violations per building.</span>
    </IconRow>
  )
}

export const TotalServiceCallsRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={ServiceCallIcon}>
      There are <span>{props.value} total 311-calls.</span>
    </IconRow>
  )
}

export const TimeToResolveCallsRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={TimeToResolveCallsIcon}>
      It takes an average of {props.value} days for the city to resolve 311-calls here.{' '}
    </IconRow>
  )
}

export const ServiceCallsOpenRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={ServiceCallOpenIcon}>
      {props.value}% of current 311-calls have been open over 1 month.
    </IconRow>
  )
}
