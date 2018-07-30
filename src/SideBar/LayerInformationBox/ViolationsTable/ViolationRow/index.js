import React from 'react'
import PropTypes from 'prop-types'

import SwitchViewButton from '../../../SharedComponents/SwitchViewButton'
import ActionCard from '../../../SharedComponents/ActionCard'
import { SCOPE_VIOLATIONS, SIDEBAR_VIEW_SELECTED_OBJECT } from '../../../../Store/AppState/actions'
import { updateSelectedViolation } from '../../../../Store/Violations/actions'
import { convertTimestampToData, fillEmptyString } from '../../utils/informationUtils.js'
import { InfoIcon, OpenIcon } from '../../../../SharedStyles/icons'
import './style.scss'

const ViolationRow = props => {
  const selectViolation = () => {
    props.dispatch(updateSelectedViolation(props.feature.properties))
  }

  return (
    <SwitchViewButton
      action={selectViolation}
      className="row-box violation-row"
      scopeSwitch={SCOPE_VIOLATIONS}
      viewSwitch={SIDEBAR_VIEW_SELECTED_OBJECT}
    >
      <ActionCard className={`${props.className ? props.className : ''}`}>
        <div className="table-row">
          <div className="table-cell col0">
            <div>{props.index + 1}</div>
          </div>
          <div className="table-cell v-col1">
            <div>{convertTimestampToData(props.feature.properties.date)}</div>
          </div>

          <div className="table-cell v-col2">
            <div>{fillEmptyString(props.feature.properties.name)}</div>
          </div>
          <div className="table-cell v-col3">
            <div>{fillEmptyString(props.feature.properties.status)}</div>
          </div>
        </div>
      </ActionCard>
    </SwitchViewButton>
  )
}

ViolationRow.propTypes = {
  dispatch: PropTypes.func,
  feature: PropTypes.object,
  index: PropTypes.number
}

export default ViolationRow
