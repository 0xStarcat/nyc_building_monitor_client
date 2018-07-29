import React from 'react'
import PropTypes from 'prop-types'

import IconRow from '../../SharedComponents/IconRow'
import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import ButtonRow from '../../../SharedComponents/ButtonRow'
import { RightArrow } from '../../../SharedStyles/icons'

import { convertDepartmentToName, convertTimestampToData, fillEmptyString } from '../utils/informationUtils.js'

import { prevSelectedServiceCall, nextSelectedServiceCall } from '../../../Store/ServiceCalls/actions'

import { ServiceCallIcon, ServiceCallOpenIcon, TimeToResolveCallsIcon } from '../../../SharedStyles/icons'

import '../SharedStyles/style.scss'

const getServiceCallResult = selectedObject => {
  if (selectedObject.resolutionViolation)
    return (
      <span>
        The inspectors investigated and <span className="resolution-result">issued a violation</span> based on the call.
      </span>
    )
  else if (selectedObject.resolutionNoAction)
    return (
      <span>
        The inspectors investigated and <span className="resolution-result">found no issues.</span>
      </span>
    )
  else if (selectedObject.resolutionUnableToInvestigate)
    return (
      <span>
        The inspectors were <span className="resolution-result">unable to gain access</span> to inspect.
      </span>
    )
  else return null
}

const ServiceCallInformation = props => {
  const parsedResult = getServiceCallResult(props.selectedObject)

  return (
    <div className="violation-information">
      <ButtonRow className="split">
        <DispatchActionButton
          action={prevSelectedServiceCall}
          className="control-icon-container round button-border-left"
        >
          <RightArrow className="svg-flip" />
        </DispatchActionButton>
        {props.selectedObject.index + 1} / {props.featureLength}
        <DispatchActionButton
          action={nextSelectedServiceCall}
          className="control-icon-container round button-border-right"
        >
          <RightArrow />
        </DispatchActionButton>
      </ButtonRow>
      <div className="info-section">
        <IconRow className="card" icon={ServiceCallIcon}>
          <div>Open: {convertTimestampToData(props.selectedObject.date)}</div>
        </IconRow>
        <div className="row-box text-well">
          <div>{props.selectedObject.complaintType}</div>
          <div>{fillEmptyString(props.selectedObject.description)}</div>
        </div>
        <IconRow className="card" icon={ServiceCallIcon}>
          Assigned to the <span>{convertDepartmentToName(props.selectedObject.source)}</span>
        </IconRow>
        {props.selectedObject.openOverMonth && (
          <IconRow className="card" icon={ServiceCallIcon}>
            This call has been open for over a month.
          </IconRow>
        )}
      </div>
      {props.selectedObject.closedDate && (
        <div className="info-section">
          <h5 className="info-title">Resolution</h5>

          <div>
            <IconRow className="card" icon={ServiceCallIcon}>
              <div>Closed: {convertTimestampToData(props.selectedObject.closedDate)}</div>
            </IconRow>
            <div className="row-box text-well">
              <div>{fillEmptyString(props.selectedObject.resolutionDescription)}</div>
            </div>
            {parsedResult && (
              <IconRow className="card" icon={ServiceCallIcon}>
                {parsedResult}
              </IconRow>
            )}
            <IconRow className="card" icon={ServiceCallIcon}>
              This call took {props.selectedObject.daysToResolve} day(s) to resolve.
            </IconRow>
          </div>
        </div>
      )}
    </div>
  )
}

ServiceCallInformation.propTypes = {
  dispatch: PropTypes.func,
  selectedObject: PropTypes.object
}

export default ServiceCallInformation
