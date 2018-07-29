import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import {
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPE_MENU,
  SIDEBAR_VIEW_BUILDING_LAYER_MENU,
  SIDEBAR_VIEW_SELECTED_OBJECT,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS,
  SCOPE_VIOLATIONS,
  SCOPE_SERVICE_CALLS
} from '../../../Store/AppState/actions'

import SwitchViewButton from '../../SharedComponents/SwitchViewButton'
import { RightArrow } from '../../../SharedStyles/icons'

export const ControlBackButton = props => {
  const getBackView = () => {
    const appState = props.appState

    if (appState.sidebarView === SIDEBAR_VIEW_BUILDING_LAYER_MENU) return SIDEBAR_VIEW_BOUNDARY_LAYER_MENU
    if (appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU && props.buildingsPresent)
      return SIDEBAR_VIEW_BUILDING_LAYER_MENU

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        if (props.buildingsPresent && !appState.landscapeOrientation) return SIDEBAR_VIEW_BUILDING_LAYER_MENU
        else return SIDEBAR_VIEW_BOUNDARY_LAYER_MENU
      case SCOPE_CENSUS_TRACTS:
        if (props.buildingsPresent && !appState.landscapeOrientation) return SIDEBAR_VIEW_BUILDING_LAYER_MENU
        else return SIDEBAR_VIEW_BOUNDARY_LAYER_MENU
      case SCOPE_BUILDINGS:
        return SIDEBAR_VIEW_SELECTED_OBJECT
      case SCOPE_VIOLATIONS:
        if (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS) return SIDEBAR_VIEW_SELECTED_OBJECT
        else return SIDEBAR_VIEW_SCOPED_OBJECTS
      case SCOPE_SERVICE_CALLS:
        if (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS) return SIDEBAR_VIEW_SELECTED_OBJECT
        else return SIDEBAR_VIEW_SCOPED_OBJECTS
      default:
        return appState.sidebarView
    }
  }

  const getBackScope = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_BUILDINGS:
        if (!!props.selectedCensusTract) return SCOPE_CENSUS_TRACTS
        else return SCOPE_NEIGHBORHOODS
      case SCOPE_VIOLATIONS:
        if (appState.sidebarView === SIDEBAR_VIEW_SELECTED_OBJECT) return SCOPE_VIOLATIONS
        else return SCOPE_BUILDINGS
      case SCOPE_SERVICE_CALLS:
        if (appState.sidebarView === SIDEBAR_VIEW_SELECTED_OBJECT) return SCOPE_SERVICE_CALLS

        return SCOPE_BUILDINGS
      default:
        return appState.sidebarScope
    }
  }

  const getBackState = () => {
    const appState = props.appState
    if (appState.landscapeOrientation) return null
    if (appState.sidebarScope === SCOPE_CENSUS_TRACTS || appState.sidebarScope === SCOPE_NEIGHBORHOODS) {
      return SIDEBAR_STATE_PREVIEW
    } else {
      return null
    }
  }

  const getBackText = () => {
    const appState = props.appState

    if (appState.sidebarView === SIDEBAR_VIEW_BUILDING_LAYER_MENU) return 'Region Layers'
    if (appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU && props.buildingsPresent) return 'Building Layers'
    if (appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU) return null

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        if (props.buildingsPresent && !appState.landscapeOrientation) return 'Building Layers'
        else return 'Region Layers'
      case SCOPE_CENSUS_TRACTS:
        if (props.buildingsPresent && !appState.landscapeOrientation) return 'Building Layers'
        else return 'Region Layers'
      case SCOPE_BUILDINGS:
        return (props.selectedNeighborhood || {}).name || `#${(props.selectedCensusTract || {}).name}`
      case SCOPE_VIOLATIONS:
        if (appState.sidebarView === SIDEBAR_VIEW_SELECTED_OBJECT) return 'Violations'
        else return props.selectedBuilding.name
      case SCOPE_SERVICE_CALLS:
        if (appState.sidebarView === SIDEBAR_VIEW_SELECTED_OBJECT) return '311-Calls'
        else return props.selectedBuilding.name
      default:
        return 'Back'
    }
  }

  const disabled = props.appState.sidebarView === SIDEBAR_VIEW_SCOPE_MENU
  // props.appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU ||
  // props.appState.sidebarView === SIDEBAR_VIEW_BUILDING_LAYER_MENU

  return (
    <SwitchViewButton
      className={`back-button control-button ${disabled ? 'disabled-button' : ''} ${props.className}`}
      disabled={disabled}
      stateSwitch={getBackState()}
      scopeSwitch={getBackScope()}
      viewSwitch={getBackView()}
    >
      <div className={`control-icon-container round button-border-left ${disabled ? 'hidden-svg' : ''}`}>
        <RightArrow className="svg-flip" />
      </div>
      <div className="button-label left-label">{disabled ? '' : getBackText()}</div>
    </SwitchViewButton>
  )
}

ControlBackButton.propTypes = {
  appState: PropTypes.object,
  buildingsPresent: PropTypes.bool,
  selectedNeighborhood: PropTypes.object,
  selectedCensusTract: PropTypes.object,
  selectedBuilding: PropTypes.object,
  selectedViolation: PropTypes.object,
  selectedServiceCall: PropTypes.object
}

const mapStateToProps = state => {
  return {
    appState: state.appState,
    buildingsPresent: !!state.buildings.features.length,
    selectedNeighborhood: state.neighborhoods.selectedObject,
    selectedCensusTract: state.censusTracts.selectedObject,
    selectedBuilding: state.buildings.selectedObject,
    selectedViolation: state.violations.selectedObject,
    selectedServiceCall: state.serviceCalls.selectedObject
  }
}

export default connect(mapStateToProps)(ControlBackButton)
