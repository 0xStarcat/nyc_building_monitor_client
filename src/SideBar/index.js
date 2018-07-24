import React from 'react'
import { connect } from 'react'
import AppLink from '../SharedComponents/AppLink'
import LayerInformationBox from './LayerInformationBox'
import ControlBar from './ControlBar'

import './style.scss'

class SideBar extends React.Component {
  constructor(props) {
    super(props)

    this.getActiveTransform = this.getActiveTransform.bind(this)
    this.getInactiveTransform = this.getInactiveTransform.bind(this)
    this.storeStyle = this.storeStyle.bind(this)
  }

  getActiveTransform() {
    return this.props.store.appState.landscapeOrientation ? 'translateX(0)' : 'translateY(0)'
  }

  getInactiveTransform() {
    return this.props.store.appState.landscapeOrientation ? 'translateX(-400px)' : 'translateY(calc(100vh))'
  }

  storeStyle() {
    return {
      transform: this.props.store.appState.sidebarActive ? this.getActiveTransform() : this.getInactiveTransform()
    }
  }

  render() {
    return (
      <div id="sidebar" style={this.storeStyle()}>
        <ControlBar dispatch={this.props.dispatch} appState={this.props.store.appState} />
        <LayerInformationBox
          dispatch={this.props.dispatch}
          sidebarScope={this.props.store.appState.sidebarScope}
          features={this.props.store[this.props.store.appState.sidebarScope].features}
          selectedObject={this.props.store[this.props.store.appState.sidebarScope].selectedObject}
        />
      </div>
    )
  }
}

export default SideBar
