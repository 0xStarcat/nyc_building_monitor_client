import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react'
import AppLink from '../SharedComponents/AppLink'
import LayerInformationHeader from './LayerInformationHeader'

import LayerInformationBox from './LayerInformationBox'
import SidebarLayerMenu from './SidebarLayerMenu'
import SidebarBuildingLayerMenu from './SidebarBuildingLayerMenu'

import TopBar from './TopBar'
import ControlRow from './SharedComponents/ControlRow'
import BuildingLayerButton from '../SharedComponents/BuildingLayerButton'
import ControlBackButton from './SharedComponents/ControlBackButton'
import ControlNextButton from './SharedComponents/ControlNextButton'

import {
  MOBILE_SIDEBAR_ACTIVE_X_TRANSLATION,
  MOBILE_SIDEBAR_INACTIVE_X_TRANSLATION,
  MOBILE_SIDEBAR_ACTIVE_Y_TRANSLATION,
  MOBILE_SIDEBAR_PREVIEW_Y_TRANSLATION,
  MOBILE_SIDEBAR_LARGE_PREVIEW_Y_TRANSLATION,
  MOBILE_SIDEBAR_INACTIVE_Y_TRANSLATION
} from '../SharedStyles/__constants__/sidebarConstants.js'

import {
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_LARGE_PREVIEW,
  SIDEBAR_STATE_INACTIVE,
  SIDEBAR_VIEW_BUILDING_LAYER_MENU,
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SELECTED_OBJECT,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SIDEBAR_VIEW_SCOPE_MENU,
  SCOPE_VIOLATIONS,
  SCOPE_SERVICE_CALLS
} from '../Store/AppState/actions'

import './style.scss'

class SideBar extends React.Component {
  constructor(props) {
    super(props)

    this.getSidebarStateXTransform = this.getSidebarStateXTransform.bind(this)
    this.getSidebarStateYTransform = this.getSidebarStateYTransform.bind(this)

    this.storeStyle = this.storeStyle.bind(this)
    this.getView = this.getView.bind(this)
  }

  getSidebarStateXTransform() {
    switch (this.props.store.appState.sidebarState) {
      case SIDEBAR_STATE_ACTIVE:
        return `translateX(${MOBILE_SIDEBAR_ACTIVE_X_TRANSLATION})`
      case SIDEBAR_STATE_INACTIVE:
        return `translateX(${MOBILE_SIDEBAR_INACTIVE_X_TRANSLATION})`
    }
  }

  getSidebarStateYTransform() {
    switch (this.props.store.appState.sidebarState) {
      case SIDEBAR_STATE_ACTIVE:
        return `translateY(${MOBILE_SIDEBAR_ACTIVE_Y_TRANSLATION})`
      case SIDEBAR_STATE_PREVIEW:
        return `translateY(${MOBILE_SIDEBAR_PREVIEW_Y_TRANSLATION})`
      case SIDEBAR_STATE_LARGE_PREVIEW:
        return `translateY(${MOBILE_SIDEBAR_LARGE_PREVIEW_Y_TRANSLATION})`
      case SIDEBAR_STATE_INACTIVE:
        return `translateY(${MOBILE_SIDEBAR_INACTIVE_Y_TRANSLATION})`
    }
  }

  getView() {
    const appState = this.props.store.appState
    const selectedObject = (this.props.store[appState.sidebarScope] || {}).selectedObject
    switch (appState.sidebarView) {
      case SIDEBAR_VIEW_SCOPE_MENU:
        return (
          <div className="sidebar-view-container">
            <SidebarLayerMenu landscapeOrientation={appState.landscapeOrientation} dispatch={this.props.dispatch} />
          </div>
        )
      case SIDEBAR_VIEW_BOUNDARY_LAYER_MENU:
        return (
          <div className="sidebar-view-container">
            <SidebarLayerMenu landscapeOrientation={appState.landscapeOrientation} dispatch={this.props.dispatch} />
          </div>
        )
      case SIDEBAR_VIEW_BUILDING_LAYER_MENU:
        return (
          <div className="sidebar-view-container">
            <SidebarBuildingLayerMenu
              landscapeOrientation={appState.landscapeOrientation}
              dispatch={this.props.dispatch}
            />
          </div>
        )
      default:
        return (
          <div className="sidebar-view-container">
            <LayerInformationHeader
              selectedObject={selectedObject}
              sidebarView={appState.sidebarView}
              sidebarScope={appState.sidebarScope}
            />

            {appState.landscapeOrientation &&
              (appState.sidebarScope === SCOPE_NEIGHBORHOODS || appState.sidebarScope === SCOPE_CENSUS_TRACTS) && (
                <BuildingLayerButton
                  appState={appState}
                  buildingsPresent={this.props.buildingsPresent}
                  selectedObject={selectedObject}
                  setViewCoordinates={this.props.setViewCoordinates}
                />
              )}
            <LayerInformationBox
              appState={appState}
              dispatch={this.props.dispatch}
              features={this.props.store[appState.sidebarScope].features}
              parentObject={
                appState.sidebarScope === SCOPE_VIOLATIONS || appState.sidebarScope === SCOPE_SERVICE_CALLS
                  ? this.props.store.buildings.selectedObject
                  : null
              }
              selectedObject={selectedObject}
            />
          </div>
        )
    }
  }

  storeStyle() {
    return {
      transform: this.props.store.appState.landscapeOrientation
        ? this.getSidebarStateXTransform()
        : this.getSidebarStateYTransform()
    }
  }

  render() {
    return (
      <div id="sidebar" style={this.storeStyle()}>
        <TopBar dispatch={this.props.dispatch} appState={this.props.store.appState} />
        {this.getView()}
      </div>
    )
  }
}

SideBar.propTypes = {
  dispatch: PropTypes.func,
  store: PropTypes.object,
  setViewCoordinates: PropTypes.func
}

export default SideBar
