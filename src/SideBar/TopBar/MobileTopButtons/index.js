import React from 'react'
import PropTypes from 'prop-types'

import ControlHideButton from '../ControlHideButton'
import ControlExpandButton from '../ControlExpandButton'
import ControlPreviewButton from '../ControlPreviewButton'

import { SIDEBAR_STATE_INACTIVE, SIDEBAR_STATE_PREVIEW, SIDEBAR_STATE_ACTIVE } from '../../../Store/AppState/actions'

const MobileTopButtons = props => {
  return (
    <div className="mobile-buttons button-row">
      <ControlHideButton />
      {props.appState.sidebarState === SIDEBAR_STATE_PREVIEW && <ControlExpandButton />}
      {props.appState.sidebarState === SIDEBAR_STATE_ACTIVE && <ControlPreviewButton />}
    </div>
  )
}

MobileTopButtons.propTypes = {
  appState: PropTypes.object
}

export default MobileTopButtons
