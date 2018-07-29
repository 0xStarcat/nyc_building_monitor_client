import React from 'react'
import PropTypes from 'prop-types'

import MobileBoundaryLayerButton from './MobileBoundaryLayerButton'
import BuildingLayerButton from '../SharedComponents/BuildingLayerButton'

import { SIDEBAR_STATE_INACTIVE, SIDEBAR_STATE_PREVIEW, SIDEBAR_STATE_ACTIVE } from '../Store/AppState/actions'

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
  return (
    <div className="mobile-button-container" style={containerStyle}>
      <BuildingLayerButton
        appState={props.appState}
        buildingsPresent={props.buildingsPresent}
        selectedObject={props.selectedObject}
        setViewCoordinates={props.setViewCoordinates}
      />
      <MobileBoundaryLayerButton appState={props.appState} selectedObject={props.selectedObject} />
    </div>
  )
}

MobileButtonContainer.propTypes = {
  appState: PropTypes.object,
  buildingsPresent: PropTypes.bool,
  selectedObject: PropTypes.object,
  setViewCoordinates: PropTypes.func
}

export default MobileButtonContainer
