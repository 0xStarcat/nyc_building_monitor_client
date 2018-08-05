import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import SwitchViewButton from '../../../../SharedComponents/SwitchViewButton'
import ActionCard from '../../../SharedComponents/ActionCard'
import { SCOPE_SERVICE_CALLS, SIDEBAR_VIEW_SELECTED_OBJECT } from '../../../../Store/AppState/actions'
import { updateSelectedServiceCall } from '../../../../Store/ServiceCalls/actions'
import { convertTimestampToData, fillEmptyString } from '../../../../SharedUtilities/informationUtils.js'

import './style.scss'

const ServiceCallRow = props => {
  const selectServiceCall = () => {
    props.dispatch(updateSelectedServiceCall(props.feature.properties))
  }

  const getViolationText = () => {
    if (props.feature.properties.status.toLowerCase() === 'open') return '(still open)'
    else return props.feature.properties.resolutionViolation ? 'Yes' : 'No'
  }

  const resolutionResolved = properties => {
    if (properties.resolutionViolation) return ''
    if (properties.resolutionNoAction) return properties.resolutionNoAction
    if (properties.resolutionUnableToInvestigate) return properties.resolutionUnableToInvestigate
    if (properties.status.toLowerCase() === 'open') return properties.status
  }
  return (
    <SwitchViewButton
      action={selectServiceCall}
      className="row-box service-call-row"
      scopeSwitch={SCOPE_SERVICE_CALLS}
      viewSwitch={SIDEBAR_VIEW_SELECTED_OBJECT}
    >
      <ActionCard className={classNames(props.className)}>
        <div className="table-row">
          <div className="table-cell col0">
            <div>{props.index + 1}</div>
          </div>
          <div className="table-cell sc-col1">
            <div>{convertTimestampToData(props.feature.properties.date)}</div>
          </div>

          <div className="table-cell sc-col2">
            <div>{fillEmptyString(props.feature.properties.status)}</div>
          </div>
          <div className="table-cell sc-col3">{<div>{getViolationText()}</div>}</div>
        </div>
      </ActionCard>
    </SwitchViewButton>
  )
}

ServiceCallRow.propTypes = {
  dispatch: PropTypes.func,
  feature: PropTypes.object,
  index: PropTypes.number
}

export default ServiceCallRow
