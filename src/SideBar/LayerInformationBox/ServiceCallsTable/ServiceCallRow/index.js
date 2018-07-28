import React from 'react'
import PropTypes from 'prop-types'

import SwitchViewButton from '../../../SharedComponents/SwitchViewButton'

import { SCOPE_VIOLATIONS, SIDEBAR_VIEW_SELECTED_OBJECT } from '../../../../Store/AppState/actions'
import { updateSelectedServiceCall } from '../../../../Store/ServiceCalls/actions'
import { convertTimestampToData, fillEmptyString } from '../../utils/informationUtils.js'
import { InfoIcon, OpenIcon } from '../../../../SharedStyles/icons'
import './style.scss'

const ServiceCallRow = props => {
  const selectServiceCall = () => {
    props.dispatch(updateSelectedServiceCall(props.feature.properties))
  }

  const resolutionResolved = properties => {
    if (properties.resolutionViolation) return tr
    if (properties.resolutionNoAction) return properties.resolutionNoAction
    if (properties.resolutionUnableToInvestigate) return properties.resolutionUnableToInvestigate
    if (properties.status.toLowerCase() === 'open') return properties.status
  }
  return (
    <SwitchViewButton
      action={selectServiceCall}
      className="info-row hover-shadow row-box service-call-row"
      scopeSwitch={SCOPE_VIOLATIONS}
      viewSwitch={SIDEBAR_VIEW_SELECTED_OBJECT}
    >
      <div className="table-cell col0">
        <div>{props.index + 1}</div>
      </div>
      <div className="table-cell sc-col1">
        <div>{convertTimestampToData(props.feature.properties.date)}</div>
      </div>

      <div className="table-cell sc-col2">
        <div>{fillEmptyString(props.feature.properties.status)}</div>
      </div>
      <div className="table-cell sc-col3">
        <div>{props.feature.properties.resolutionViolation ? 'Yes' : 'No'}</div>
      </div>
      <div className="table-cell sc-col4">
        <i>
          <OpenIcon />
        </i>
      </div>
    </SwitchViewButton>
  )
}

ServiceCallRow.propTypes = {
  dispatch: PropTypes.func,
  feature: PropTypes.object,
  index: PropTypes.number
}

export default ServiceCallRow
