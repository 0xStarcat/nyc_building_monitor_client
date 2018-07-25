import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../../Store/AppState/actions'

import SwitchViewButton from '../../SharedComponents/SwitchViewButton'

const ControlNextButton = props => {
  const getNextView = () => {
    const appState = props.appState

    if (appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU) return SIDEBAR_VIEW_SCOPED_OBJECTS
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
    if (appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU) {
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
      (appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU &&
        (!!props.selectedObjects.censusTracts.object || !!props.selectedObjects.neighborhoods.object)) ||
      (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS &&
        appState.sidebarScope === SCOPE_CENSUS_TRACTS &&
        !!props.selectedObjects.buildings.object)
    )
  }
  const disabled = !hasNext()

  return (
    <SwitchViewButton
      className={`next-button control-button ${disabled ? 'disabled-button' : ''}`}
      disabled={disabled}
      scopeSwitch={getNextScope()}
      viewSwitch={getNextView()}
    >
      {disabled ? '' : 'Next'}
    </SwitchViewButton>
  )
}

ControlNextButton.propTypes = {
  appState: PropTypes.object,
  disabled: PropTypes.bool,
  scopeSwitch: PropTypes.string,
  selectedObjects: PropTypes.object,
  viewSwitch: PropTypes.string
}

export default ControlNextButton
