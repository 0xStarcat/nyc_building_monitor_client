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
  if (value > 90000) {
    return 'value-high'
  } else if (value > 50000) {
    return 'value-middle'
  } else {
    return 'value-low'
  }
}

export const IncomeRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={IncomeIcon}>
      The median income in 2017 was <span className={classNames(incomeValueClass(props.value))}>${props.value}</span>
    </IconRow>
  )
}

export const RentRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={RentIcon}>
      The median rent in 2017 was <span>${props.value}</span>
    </IconRow>
  )
}

export const RaceRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={PopulationIcon}>
      The population in 2010 was <span>{props.value}%</span> white.
    </IconRow>
  )
}

export const TotalBuildingsRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={BuildingIcon}>
      There are <span>{props.value1}</span> buildings and <span>{props.value2}</span> residential buildings in this
      area.{' '}
    </IconRow>
  )
}

export const RentChangeRow = props => {
  return (
    <IconRow className={classNames(props.className)} icon={RentChangeIcon}>
      The rent changed by <span>${props.value}</span>
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
