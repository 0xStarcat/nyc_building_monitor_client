import React from 'react'
import { connect } from 'react-redux'

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

export const ControlNextButton = props => {
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

  const getNextText = () => {
    const appState = props.appState
    if (isView()) {
      return (props.selectedNeighborhood || {}).name || `#${(props.selectedCensusTract || {}).name}`
    }

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        return props.selectedBuilding.name
      case SCOPE_CENSUS_TRACTS:
        return props.selectedBuilding.name
      case SCOPE_BUILDINGS:
        return props.selectedViolation.name || props.selectedServiceCall.name
      case SCOPE_VIOLATIONS:
        return props.selectedViolation.name
      case SCOPE_SERVICE_CALLS:
        return props.selectedServiceCall.name
      default:
        return 'Next'
    }
  }

  const hasNext = () => {
    const appState = props.appState
    return (
      ((appState.sidebarView === SIDEBAR_VIEW_SCOPE_MENU ||
        appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU ||
        appState.sidebarView === SIDEBAR_VIEW_BUILDING_LAYER_MENU) &&
        (!!props.selectedCensusTract || !!props.selectedNeighborhood)) ||
      (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS &&
        appState.sidebarScope === SCOPE_CENSUS_TRACTS &&
        !!props.selectedBuilding)
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
      <div className="button-label right-label">{disabled ? '' : getNextText()}</div>
    </SwitchViewButton>
  )
}

ControlNextButton.propTypes = {
  appState: PropTypes.object,
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

export default connect(mapStateToProps)(ControlNextButton)
