import React from 'react'
import { connect } from 'react'
import AppLink from '../SharedComponents/AppLink'
import LayerInformationBox from './LayerInformationBox'

import { deactivateSideBar } from '../Store/AppState/actions'

import './style.scss'

class SideBar extends React.Component {
  constructor(props) {
    super(props)

    this.getActiveTransform = this.getActiveTransform.bind(this)
    this.getInactiveTransform = this.getInactiveTransform.bind(this)
    this.storeStyle = this.storeStyle.bind(this)
    this.collapseSidebar = this.collapseSidebar.bind(this)
  }

  getActiveTransform() {
    return this.props.appState.landscapeOrientation ? 'translateX(0)' : 'translateY(calc(100vh - 500px))'
  }

  getInactiveTransform() {
    return this.props.appState.landscapeOrientation ? 'translateX(-500px)' : 'translateY(calc(100vh + 500px))'
  }

  storeStyle() {
    return { transform: this.props.appState.sidebarActive ? this.getActiveTransform() : this.getInactiveTransform() }
  }

  collapseSidebar() {
    this.props.dispatch(deactivateSideBar())
  }

  render() {
    return (
      <div id="sidebar" style={this.storeStyle()}>
        <button className="sidebar-button" id="sidebar-collapse" onClick={this.collapseSidebar}>
          X collapse
        </button>
        <LayerInformationBox
          dispatch={this.props.dispatch}
          sidebarMode={this.props.appState.sidebarMode}
          selectedLayer={this.props.appState.selectedLayer}
        />
      </div>
    )
  }
}

export default SideBar
