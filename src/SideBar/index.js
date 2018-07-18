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
    return this.props.store.appState.landscapeOrientation ? 'translateX(0)' : 'translateY(calc(100vh - 500px))'
  }

  getInactiveTransform() {
    return this.props.store.appState.landscapeOrientation ? 'translateX(-500px)' : 'translateY(calc(100vh + 500px))'
  }

  storeStyle() {
    return {
      transform: this.props.store.appState.sidebarActive ? this.getActiveTransform() : this.getInactiveTransform()
    }
  }

  collapseSidebar() {
    this.props.dispatch(deactivateSideBar())
  }

  render() {
    return (
      <div id="sidebar" style={this.storeStyle()}>
        <button className="collapse-button sidebar-button" onClick={this.collapseSidebar}>
          X collapse
        </button>
        {Object.keys(this.props.store[this.props.store.appState.sidebarMode].selectedObject).length && (
          <LayerInformationBox
            dispatch={this.props.dispatch}
            sidebarMode={this.props.store.appState.sidebarMode}
            selectedObject={this.props.store[this.props.store.appState.sidebarMode].selectedObject}
          />
        )}
      </div>
    )
  }
}

export default SideBar
