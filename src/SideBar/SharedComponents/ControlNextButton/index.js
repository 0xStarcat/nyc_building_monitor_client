import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_BUILDING_LAYER_MENU,
  SIDEBAR_VIEW_SCOPE_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../../Store/AppState/actions'

import SwitchViewButton from '../../SharedComponents/SwitchViewButton'
import { RightArrow } from '../../../SharedStyles/icons'

const ControlNextButton = props => {
  const isView = () => {
    const appState = props.appState
    return (
      appState.sidebarView === SIDEBAR_VIEW_SCOPE_MENU ||
      appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU ||
      appState.sidebarView === SIDEBAR_VIEW_BUILDING_LAYER_MENU
    )
  }
  const getNextView = () => {
    const appState = props.appState

    if (isView()) return SIDEBAR_VIEW_SCOPED_OBJECTS
    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        return SIDEBAR_VIEW_SCOPED_OBJECTS
      case SCOPE_CENSUS_TRACTS:
        return SIDEBAR_VIEW_SCOPED_OBJECTS
      default:
        return appState.sidebarView
    }
  }

  const getNextScope = () => {
    const appState = props.appState
    if (isView()) {
      return appState.baseLayerScope
    }
    switch (appState.sidebarScope) {
      case SCOPE_CENSUS_TRACTS:
        return SCOPE_BUILDINGS
      default:
        return appState.sidebarScope
    }
  }

  const hasNext = () => {
    const appState = props.appState
    return (
      ((appState.sidebarView === SIDEBAR_VIEW_SCOPE_MENU ||
        appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU ||
        appState.sidebarView === SIDEBAR_VIEW_BUILDING_LAYER_MENU) &&
        (!!props.selectedObjects.censusTracts.object || !!props.selectedObjects.neighborhoods.object)) ||
      (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS &&
        appState.sidebarScope === SCOPE_CENSUS_TRACTS &&
        !!props.selectedObjects.buildings.object)
    )
  }
  const disabled = !hasNext()

  return (
    <SwitchViewButton
      className={`next-button control-button ${disabled ? 'disabled-button' : ''} ${props.className}`}
      disabled={disabled}
      scopeSwitch={getNextScope()}
      viewSwitch={getNextView()}
    >
      <div className={`control-icon-container round button-border-right ${disabled ? 'hidden-svg' : ''}`}>
        <RightArrow />
      </div>
    </SwitchViewButton>
  )
}

ControlNextButton.propTypes = {
  appState: PropTypes.object,
  selectedObjects: PropTypes.object
}

export default ControlNextButton
