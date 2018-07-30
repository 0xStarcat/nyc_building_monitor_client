import React from 'react'
import PropTypes from 'prop-types'
import IconRow from '../../../SharedComponents/IconRow'

import { convertBuildingCodeToDescription } from '../utils/buildingInformationUtils.js'

import {
  BuildingClassIcon,
  ViolationIcon,
  ServiceCallIcon,
  ServiceCallOpenIcon,
  TimeToResolveCallsIcon
} from '../../../../SharedStyles/icons'

export const BuildingClassRow = props => {
  return (
    <IconRow className={props.className} icon={BuildingClassIcon}>
      This building class is:{' '}
      <span>
        {props.value} which is a:{' '}
        <span className="building-class-description">{convertBuildingCodeToDescription(props.value)}</span>
      </span>
    </IconRow>
  )
}

export const ViolationRow = props => {
  return (
    <IconRow className={props.className} icon={ViolationIcon}>
      There are <span>{props.value} total violations.</span>
    </IconRow>
  )
}

export const ServiceCallRow = props => {
  return (
    <IconRow className={props.className} icon={ServiceCallIcon}>
      There are <span>{props.value} total 311-calls.</span>
    </IconRow>
  )
}

export const TimeToResolveCallsRow = props => {
  return (
    <IconRow className={props.className} icon={TimeToResolveCallsIcon}>
      It takes an average of {props.value} days for the city to resolve 311-calls here.
    </IconRow>
  )
}

export const ServiceCallsOpenRow = props => {
  return (
    <IconRow className={props.className} icon={ServiceCallOpenIcon}>
      {props.value}% of current 311-calls have been open over 1 month.
    </IconRow>
  )
}
