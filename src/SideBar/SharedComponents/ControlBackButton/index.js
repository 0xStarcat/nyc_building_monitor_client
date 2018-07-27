import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPE_MENU,
  SIDEBAR_VIEW_BUILDING_LAYER_MENU,
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

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        if (props.buildingsPresent) return SIDEBAR_VIEW_BUILDING_LAYER_MENU
        else return SIDEBAR_VIEW_BOUNDARY_LAYER_MENU
      case SCOPE_CENSUS_TRACTS:
        if (props.buildingsPresent) return SIDEBAR_VIEW_BUILDING_LAYER_MENU
        else return SIDEBAR_VIEW_BOUNDARY_LAYER_MENU
      default:
        return appState.sidebarView
    }
  }

  const getBackScope = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_BUILDINGS:
        return SCOPE_CENSUS_TRACTS
      case SCOPE_VIOLATIONS:
        return SCOPE_BUILDINGS
      case SCOPE_VIOLATIONS:
        return SCOPE_BUILDINGS
      default:
        return appState.sidebarScope
    }
  }

  const getBackText = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        if (props.buildingsPresent) return 'Building Layers'
        else return 'Region Layers'
      case SCOPE_CENSUS_TRACTS:
        if (props.buildingsPresent) return 'Building Layers'
        else return 'Region Layers'
      case SCOPE_BUILDINGS:
        return (props.selectedNeighborhood || {}).name || `#${(props.selectedCensusTract || {}).name}`
      case SCOPE_VIOLATIONS:
        return props.selectedBuilding.name
      case SCOPE_SERVICE_CALLS:
        return props.selectedBuilding.name
      default:
        return 'Back'
    }
  }

  const disabled =
    props.appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU ||
    props.appState.sidebarView === SIDEBAR_VIEW_SCOPE_MENU ||
    props.appState.sidebarView === SIDEBAR_VIEW_BUILDING_LAYER_MENU

  return (
    <SwitchViewButton
      className={`back-button control-button ${disabled ? 'disabled-button' : ''} ${props.className}`}
      disabled={disabled}
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
