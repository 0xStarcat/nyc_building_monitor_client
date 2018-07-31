import React from 'react'
import PropTypes from 'prop-types'
import LayerInformationHeader from './LayerInformationHeader'

import LayerInformationBox from './LayerInformationBox'
import SidebarLayerMenu from './SidebarLayerMenu'
import LinkMenu from '../SharedComponents/LinkMenu'
import InformationDisplayBox from './InformationDisplayBox'

import TopBar from './TopBar'

import { getPreviewYTranslation } from '../SharedUtilities/previewUtils'

import {
  MOBILE_SIDEBAR_ACTIVE_X_TRANSLATION,
  MOBILE_SIDEBAR_INACTIVE_X_TRANSLATION,
  MOBILE_SIDEBAR_ACTIVE_Y_TRANSLATION,
  MOBILE_SIDEBAR_INACTIVE_Y_TRANSLATION
} from '../SharedStyles/__constants__/sidebarConstants.js'

import {
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_INACTIVE,
  SIDEBAR_VIEW_LINKS_MENU,
  SIDEBAR_VIEW_MAP_DETAILS_MENU,
  SIDEBAR_VIEW_INFORMATION,
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
        return `translateY(${getPreviewYTranslation(
          this.props.store.appState.sidebarView,
          this.props.buildingsPresent
        )})`
      case SIDEBAR_STATE_INACTIVE:
        return `translateY(${MOBILE_SIDEBAR_INACTIVE_Y_TRANSLATION})`
    }
  }

  getView() {
    const appState = this.props.store.appState
    const selectedObject = (this.props.store[appState.sidebarScope] || {}).selectedObject
    switch (appState.sidebarView) {
      case SIDEBAR_VIEW_LINKS_MENU:
        return <LinkMenu router={this.props.router} />
      case SIDEBAR_VIEW_MAP_DETAILS_MENU:
        return (
          <SidebarLayerMenu
            buildingsPresent={this.props.buildingsPresent}
            baseLayer={this.props.store.appState.baseLayer}
            buildingBaseLayer={this.props.store.appState.buildingBaseLayer}
            landscapeOrientation={appState.landscapeOrientation}
            dispatch={this.props.dispatch}
            sidebarScope={this.props.store.appState.sidebarScope}
          />
        )
      case SIDEBAR_VIEW_INFORMATION:
        return <InformationDisplayBox informationContentCode={appState.informationContentCode} />
      default:
        return (
          <div className="sidebar-wrapper">
            <LayerInformationHeader
              selectedObject={selectedObject}
              sidebarView={appState.sidebarView}
              sidebarScope={appState.sidebarScope}
            />
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
        <div className="sidebar-view-container">{this.getView()}</div>
      </div>
    )
  }
}

SideBar.propTypes = {
  buildingsPresent: PropTypes.bool,
  dispatch: PropTypes.func,
  router: PropTypes.object,
  store: PropTypes.object,
  setViewCoordinates: PropTypes.func
}

export default SideBar
