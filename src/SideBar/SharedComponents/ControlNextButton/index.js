import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_MAP_DETAILS_MENU,
  SIDEBAR_VIEW_SELECTED_OBJECT,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS,
  SCOPE_VIOLATIONS,
  SCOPE_SERVICE_CALLS,
  SIDEBAR_VIEW_SCOPED_OBJECTS
} from '../../../Store/AppState/actions'

import SwitchViewButton from '../../SharedComponents/SwitchViewButton'
import { RightArrow } from '../../../SharedStyles/icons'

export const ControlNextButton = props => {
  const isView = () => {
    const appState = props.appState
    return appState.sidebarView === SIDEBAR_VIEW_MAP_DETAILS_MENU
  }
  const getNextView = () => {
    const appState = props.appState

    if (isView()) return SIDEBAR_VIEW_SELECTED_OBJECT
    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        return SIDEBAR_VIEW_SELECTED_OBJECT
      case SCOPE_CENSUS_TRACTS:
        return SIDEBAR_VIEW_SELECTED_OBJECT
      case SCOPE_BUILDINGS:
        return SIDEBAR_VIEW_SCOPED_OBJECTS
      case SCOPE_VIOLATIONS:
        return SIDEBAR_VIEW_SELECTED_OBJECT
      case SCOPE_SERVICE_CALLS:
        return SIDEBAR_VIEW_SELECTED_OBJECT
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
      case SCOPE_BUILDINGS:
        if (props.violationsPresent) return SCOPE_VIOLATIONS
        if (props.serviceCallsPresent) return SCOPE_SERVICE_CALLS
      default:
        return appState.sidebarScope
    }
  }

  const getNextText = () => {
    const appState = props.appState
    if (isView()) {
      return (props.selectedNeighborhood || {}).name || `Tract #${(props.selectedCensusTract || {}).name}`
    }

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        return props.selectedBuilding.name
      case SCOPE_CENSUS_TRACTS:
        return props.selectedBuilding.name
      case SCOPE_BUILDINGS:
        return props.violationsPresent ? 'Violations' : '311-Calls'
      case SCOPE_VIOLATIONS:
        console.log(props.violations)
        if (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS)
          return `Violation #${props.selectedViolation.index + 1}`
        else return null
      case SCOPE_SERVICE_CALLS:
        if (appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS) return `Call #${props.selectedServiceCall.name}`
        else return null
      default:
        return 'Next'
    }
  }

  const hasNext = () => {
    const appState = props.appState
    return (
      (isView() && (!!props.selectedCensusTract || !!props.selectedNeighborhood)) ||
      ((appState.sidebarScope === SCOPE_CENSUS_TRACTS || appState.sidebarScope === SCOPE_NEIGHBORHOODS) &&
        !!props.selectedBuilding) ||
      (appState.sidebarScope === SCOPE_BUILDINGS && (props.violationsPresent || props.serviceCallsPresent)) ||
      (appState.sidebarScope === SCOPE_VIOLATIONS &&
        appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS &&
        !!props.selectedViolation) ||
      (appState.sidebarScope === SCOPE_SERVICE_CALLS &&
        appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS &&
        !!props.selectedServiceCall)
    )
  }
  const disabled = !hasNext()

  return (
    <SwitchViewButton
      className={classNames('next-button', 'control-button', { 'disabled-button': disabled }, props.className)}
      disabled={disabled}
      scopeSwitch={getNextScope()}
      viewSwitch={getNextView()}
    >
      <div className={classNames('control-icon-container', 'round', 'button-border-right', { 'hidden-svg': disabled })}>
        <RightArrow />
      </div>
      <div className="button-label right-label">{disabled ? '' : getNextText()}</div>
    </SwitchViewButton>
  )
}

ControlNextButton.propTypes = {
  appState: PropTypes.object,
  className: PropTypes.string,
  selectedNeighborhood: PropTypes.object,
  selectedCensusTract: PropTypes.object,
  selectedBuilding: PropTypes.object,
  selectedViolation: PropTypes.object,
  selectedServiceCall: PropTypes.object
}

const mapStateToProps = state => {
  return {
    appState: state.appState,
    violations: state.violations.features,
    serviceCalls: state.serviceCalls.features,
    buildingsPresent: !!state.buildings.features.length,
    violationsPresent: !!state.violations.features.length,
    serviceCallsPresent: !!state.serviceCalls.features.length,
    selectedNeighborhood: state.neighborhoods.selectedObject,
    selectedCensusTract: state.censusTracts.selectedObject,
    selectedBuilding: state.buildings.selectedObject,
    selectedViolation: state.violations.selectedObject,
    selectedServiceCall: state.serviceCalls.selectedObject
  }
}

export default connect(mapStateToProps)(ControlNextButton)
