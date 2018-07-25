import React from 'react'
import PropTypes from 'prop-types'

import ControlBackButton from '../ControlBackButton'
import ControlNextButton from '../ControlNextButton'

import { SIDEBAR_STATE_INACTIVE, SIDEBAR_STATE_PREVIEW, SIDEBAR_STATE_ACTIVE } from '../../../Store/AppState/actions'

import './style.scss'

const MobileTopButtons = props => {
  return (
    <div className="control-row button-row">
      <ControlBackButton appState={props.appState} />
      <ControlNextButton appState={props.appState} selectedObjects={props.selectedObjects} />
    </div>
  )
}

MobileTopButtons.propTypes = {
  appState: PropTypes.object,
  selectedObjects: PropTypes.object
}

export default MobileTopButtons
