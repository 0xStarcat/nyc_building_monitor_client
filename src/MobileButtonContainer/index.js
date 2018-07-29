import React from 'react'
import PropTypes from 'prop-types'

import MobileBoundaryLayerButton from './MobileBoundaryLayerButton'

import {
  SIDEBAR_STATE_INACTIVE,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU
} from '../Store/AppState/actions'

import {
  MOBILE_BUTTONS_INACTIVE_Y_TRANSLATION,
  MOBILE_BUTTONS_PREVIEW_Y_TRANSLATION
} from '../SharedStyles/__constants__/sidebarConstants.js'

import { getMobileButtonsYTranslation } from '../SharedUtilities/previewUtils'

import './style.scss'

const setTransationStyle = props => {
  switch (props.appState.sidebarState) {
    case SIDEBAR_STATE_INACTIVE:
      return `translateY(${MOBILE_BUTTONS_INACTIVE_Y_TRANSLATION})`
    case SIDEBAR_STATE_PREVIEW:
      return `translateY(${getMobileButtonsYTranslation(props.appState.sidebarView, props.buildingsPresent)})`
    case SIDEBAR_STATE_ACTIVE:
      return `translateY(${MOBILE_BUTTONS_PREVIEW_Y_TRANSLATION})`
  }
}
const MobileButtonContainer = props => {
  const containerStyle = { transform: setTransationStyle(props) }
  if (
    props.appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU &&
    props.appState.sidebarState !== SIDEBAR_STATE_INACTIVE
  ) {
    return null
  } else {
    return (
      <div className="mobile-button-container" style={containerStyle}>
        <MobileBoundaryLayerButton appState={props.appState} selectedObject={props.selectedObject} />
      </div>
    )
  }
}

MobileButtonContainer.propTypes = {
  appState: PropTypes.object,
  buildingsPresent: PropTypes.bool,
  selectedObject: PropTypes.object,
  setViewCoordinates: PropTypes.func
}

export default MobileButtonContainer
