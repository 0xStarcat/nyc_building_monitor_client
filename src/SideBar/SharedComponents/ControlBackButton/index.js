import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import PropTypes from 'prop-types'
import {
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_STATE_INACTIVE,
  SIDEBAR_VIEW_LINKS_MENU,
  SIDEBAR_VIEW_MAP_DETAILS_MENU,
  SIDEBAR_VIEW_SELECTED_OBJECT,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SIDEBAR_VIEW_INFORMATION,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS,
  SCOPE_VIOLATIONS,
  SCOPE_SERVICE_CALLS
} from '../../../Store/AppState/actions'

import SwitchViewButton from '../../../SharedComponents/SwitchViewButton'
import { RightArrow } from '../../../SharedStyles/icons'

export const ControlBackButton = props => {
  const getBackView = () => {
    const appState = props.appState
    if (appState.sidebarView === SIDEBAR_VIEW_MAP_DETAILS_MENU) return SIDEBAR_VIEW_LINKS_MENU
    if (appState.sidebarView === SIDEBAR_VIEW_LINKS_MENU) return SIDEBAR_VIEW_LINKS_MENU

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        return SIDEBAR_VIEW_MAP_DETAILS_MENU
      case SCOPE_CENSUS_TRACTS:
        return SIDEBAR_VIEW_MAP_DETAILS_MENU
      case SCOPE_BUILDINGS:
        return SIDEBAR_VIEW_SELECTED_OBJECT
      case SCOPE_VIOLATIONS:
        if (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS || appState.sidebarView === SIDEBAR_VIEW_INFORMATION)
          return SIDEBAR_VIEW_SELECTED_OBJECT
        else return SIDEBAR_VIEW_SCOPED_OBJECTS
      case SCOPE_SERVICE_CALLS:
        if (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS || appState.sidebarView === SIDEBAR_VIEW_INFORMATION)
          return SIDEBAR_VIEW_SELECTED_OBJECT
        else return SIDEBAR_VIEW_SCOPED_OBJECTS
      default:
        return appState.sidebarView
    }
  }

  const getBackScope = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_BUILDINGS:
        if (props.selectedCensusTract) return SCOPE_CENSUS_TRACTS
        else return SCOPE_NEIGHBORHOODS
      case SCOPE_VIOLATIONS:
        if (appState.sidebarView === SIDEBAR_VIEW_SELECTED_OBJECT || appState.sidebarView === SIDEBAR_VIEW_INFORMATION)
          return SCOPE_VIOLATIONS
        else return SCOPE_BUILDINGS
      case SCOPE_SERVICE_CALLS:
        if (appState.sidebarView === SIDEBAR_VIEW_SELECTED_OBJECT || appState.sidebarView === SIDEBAR_VIEW_INFORMATION)
          return SCOPE_SERVICE_CALLS
        return SCOPE_BUILDINGS
      default:
        return appState.sidebarScope
    }
  }

  const getBackState = () => {
    const appState = props.appState
    if (appState.sidebarView === SIDEBAR_VIEW_LINKS_MENU) return SIDEBAR_STATE_INACTIVE
    if (appState.landscapeOrientation) return props.appState.sidebarState

    if (appState.sidebarView === SIDEBAR_VIEW_MAP_DETAILS_MENU) return SIDEBAR_STATE_PREVIEW

    if (appState.sidebarScope === SCOPE_CENSUS_TRACTS || appState.sidebarScope === SCOPE_NEIGHBORHOODS) {
      return SIDEBAR_STATE_PREVIEW
    } else {
      return null
    }
  }

  const getBackText = () => {
    const appState = props.appState

    if (appState.sidebarView === SIDEBAR_VIEW_MAP_DETAILS_MENU) return 'Menu'
    if (appState.sidebarView === SIDEBAR_VIEW_LINKS_MENU) return 'Close'

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        if (props.buildingsPresent && !appState.landscapeOrientation) return 'Map Details'
        else return 'Map Details'
      case SCOPE_CENSUS_TRACTS:
        if (props.buildingsPresent && !appState.landscapeOrientation) return 'Map Details'
        else return 'Map Details'
      case SCOPE_BUILDINGS:
        return (props.selectedNeighborhood || {}).name || `#${(props.selectedCensusTract || {}).name}`
      case SCOPE_VIOLATIONS:
        if (appState.sidebarView === SIDEBAR_VIEW_SELECTED_OBJECT) return 'Violations'
        if (appState.sidebarView === SIDEBAR_VIEW_INFORMATION) return `Violation #${props.selectedViolation.name}`
        else return props.selectedBuilding.name
      case SCOPE_SERVICE_CALLS:
        if (appState.sidebarView === SIDEBAR_VIEW_SELECTED_OBJECT) return '311-Calls'
        if (appState.sidebarView === SIDEBAR_VIEW_INFORMATION) return `Call #${props.selectedServiceCall.name}`
        else return props.selectedBuilding.name
      default:
        return 'Close'
    }
  }

  const disabled = false

  return (
    <SwitchViewButton
      className={classNames('back-button', 'control-button', { 'disabled-button': disabled }, props.className)}
      disabled={disabled}
      stateSwitch={getBackState()}
      scopeSwitch={getBackScope()}
      viewSwitch={getBackView()}
    >
      <div className={classNames('control-icon-container', 'round', 'button-border-left', { 'hidden-svg': disabled })}>
        <RightArrow className="svg-flip" />
      </div>
      <div className="button-label left-label">{disabled ? '' : getBackText()}</div>
    </SwitchViewButton>
  )
}

ControlBackButton.propTypes = {
  appState: PropTypes.object,
  className: PropTypes.string,
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
