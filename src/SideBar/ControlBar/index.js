import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../Store/AppState/actions'
import ControlBackButton from './ControlBackButton'
import ControlNextButton from './ControlNextButton'
import ControlToggleButton from './ControlToggleButton'

import './style.scss'

const ControlBar = props => {
  const getBackView = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        return SIDEBAR_VIEW_MENU
      case SCOPE_CENSUS_TRACTS:
        return SIDEBAR_VIEW_MENU
      default:
        return appState.sidebarView
    }
  }

  const getBackScope = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_BUILDINGS:
        return SCOPE_CENSUS_TRACTS
      default:
        return appState.sidebarScope
    }
  }

  const getNextView = () => {
    const appState = props.appState

    if (appState.sidebarView === SIDEBAR_VIEW_MENU) return SIDEBAR_VIEW_SCOPED_OBJECTS
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
    if (appState.sidebarView === SIDEBAR_VIEW_MENU) {
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
      (appState.sidebarView === SIDEBAR_VIEW_MENU &&
        (!!props.selectedObjects.censusTracts.object || !!props.selectedObjects.neighborhoods.object)) ||
      (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS &&
        appState.sidebarScope === SCOPE_CENSUS_TRACTS &&
        !!props.selectedObjects.buildings.object)
    )
  }

  return (
    <div className="control-bar">
      <ControlBackButton
        disabled={props.appState.sidebarView === SIDEBAR_VIEW_MENU}
        scopeSwitch={getBackScope()}
        viewSwitch={getBackView()}
      />

      <ControlToggleButton appState={props.appState} dispatch={props.dispatch} />
      <ControlNextButton disabled={!hasNext()} scopeSwitch={getNextScope()} viewSwitch={getNextView()} />
    </div>
  )
}

ControlBar.propTypes = {
  appState: PropTypes.object,
  selectedObjects: PropTypes.object
}

export default ControlBar
