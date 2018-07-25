import React from 'react'
import PropTypes from 'prop-types'

import MobileBoundaryLayerButton from './MobileBoundaryLayerButton'
import MobileBuildingLayerButton from './MobileBuildingLayerButton'

import { SIDEBAR_STATE_INACTIVE, SIDEBAR_STATE_PREVIEW, SIDEBAR_STATE_ACTIVE } from '../Store/AppState/actions'

import {
  MOBILE_BUTTONS_INACTIVE_Y_TRANSLATION,
  MOBILE_BUTTONS_PREVIEW_Y_TRANSLATION
} from '../SharedStyles/__constants__/sidebarConstants.js'

import './style.scss'

const setTransationStyle = props => {
  switch (props.appState.sidebarState) {
    case SIDEBAR_STATE_INACTIVE:
      return `translateY(${MOBILE_BUTTONS_INACTIVE_Y_TRANSLATION})`
    case SIDEBAR_STATE_PREVIEW:
      return `translateY(${MOBILE_BUTTONS_PREVIEW_Y_TRANSLATION})`
  }
}
const MobileButtonContainer = props => {
  const containerStyle = { transform: setTransationStyle(props) }
  return (
    <div className="mobile-button-container" style={containerStyle}>
      <MobileBuildingLayerButton />
      <MobileBoundaryLayerButton />
    </div>
  )
}

MobileButtonContainer.propTypes = {
  appState: PropTypes.object
}

export default MobileButtonContainer
