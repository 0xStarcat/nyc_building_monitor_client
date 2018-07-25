import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react'
import AppLink from '../SharedComponents/AppLink'
import LayerInformationBox from './LayerInformationBox'
import SidebarLayerMenu from './SidebarLayerMenu'
import ControlBar from './ControlBar'

import {
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_VIEW_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SIDEBAR_VIEW_SCOPED_OBJECT
} from '../Store/AppState/actions'

import './style.scss'

class SideBar extends React.Component {
  constructor(props) {
    super(props)

    this.getActiveTransform = this.getActiveTransform.bind(this)
    this.getInactiveTransform = this.getInactiveTransform.bind(this)
    this.storeStyle = this.storeStyle.bind(this)
    this.getView = this.getView.bind(this)
  }

  getActiveTransform() {
    return this.props.store.appState.landscapeOrientation ? 'translateX(0)' : 'translateY(0)'
  }

  getInactiveTransform() {
    return this.props.store.appState.landscapeOrientation ? 'translateX(-400px)' : 'translateY(calc(100vh))'
  }

  getView() {
    switch (this.props.store.appState.sidebarView) {
      case SIDEBAR_VIEW_MENU:
        return <SidebarLayerMenu dispatch={this.props.dispatch} />
      case SIDEBAR_VIEW_SCOPED_OBJECTS:
        return (
          <LayerInformationBox
            appState={this.props.store.appState}
            dispatch={this.props.dispatch}
            features={this.props.store[this.props.store.appState.sidebarScope].features}
            selectedObject={this.props.store[this.props.store.appState.sidebarScope].selectedObject}
          />
        )
    }
  }

  storeStyle() {
    return {
      transform:
        this.props.store.appState.sidebarState === SIDEBAR_STATE_ACTIVE
          ? this.getActiveTransform()
          : this.getInactiveTransform()
    }
  }

  render() {
    return (
      <div id="sidebar" style={this.storeStyle()}>
        <ControlBar
          dispatch={this.props.dispatch}
          appState={this.props.store.appState}
          selectedObjects={this.props.selectedObjects}
        />
        {this.getView()}
      </div>
    )
  }
}

SideBar.propTypes = {
  store: PropTypes.object,
  selectedObjects: PropTypes.object
}

export default SideBar
