import React from 'react'
import classNames from 'classnames'
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

import {
  violationValueClass,
  serviceCallValueClass,
  responseTimeValueClass,
  open311CallValueClass
} from '../../../../SharedUtilities/rowHelpers.js'

export const BuildingClassRow = props => {
  return (
    <IconRow className={props.className} icon={BuildingClassIcon}>
      <div>
        This building class is: <span className="value-text value-blank">{props.value}</span> which is a:{' '}
        <span className="building-class-description">{convertBuildingCodeToDescription(props.value)}</span>
      </div>
    </IconRow>
  )
}

export const ViolationRow = props => {
  return (
    <IconRow className={props.className} icon={ViolationIcon}>
      {props.value >= 0 ? (
        <div>
          <span>
            There are{' '}
            <span className={classNames('value-text', violationValueClass(props.value, props.sidebarScope))}>
              {props.value}
            </span>{' '}
            total violations.
          </span>
        </div>
      ) : (
        <span>(No open violation data)</span>
      )}
    </IconRow>
  )
}

export const ServiceCallRow = props => {
  return (
    <IconRow className={props.className} icon={ServiceCallIcon}>
      {props.value >= 0 ? (
        <div>
          <span>
            There are{' '}
            <span className={classNames('value-text', serviceCallValueClass(props.value, props.sidebarScope))}>
              {props.value}
            </span>{' '}
            total 311-calls.
          </span>
        </div>
      ) : (
        <span>(No 311-call data)</span>
      )}
    </IconRow>
  )
}

export const TimeToResolveCallsRow = props => {
  return (
    <IconRow className={props.className} icon={TimeToResolveCallsIcon}>
      {props.value > 0 ? (
        <div>
          <span>
            It takes an average of{' '}
            <span className={classNames('value-text', responseTimeValueClass(props.value))}>{props.value}</span> days
            for the city to resolve 311-calls here.
          </span>
        </div>
      ) : (
        <span>(No response time data)</span>
      )}
    </IconRow>
  )
}

export const ServiceCallsOpenRow = props => {
  return (
    <IconRow className={props.className} icon={ServiceCallOpenIcon}>
      {props.value >= 0 ? (
        <div>
          <span className={classNames('value-text', open311CallValueClass(props.value))}>{props.value}</span>% of
          unresolved 311-calls have been open over 1 month.
        </div>
      ) : (
        <span>(No open 311-call data)</span>
      )}
    </IconRow>
  )
}
