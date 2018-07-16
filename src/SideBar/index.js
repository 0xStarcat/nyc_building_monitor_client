import React from 'react'
import { connect } from 'react'
import AppLink from '../SharedComponents/AppLink'
import SelectedLayer from './SelectedLayer'

import { deactivateSideBar } from '../Store/AppState/actions'

import './style.scss'

const SideBar = props => {
  const getActiveTransform = () => {
    return props.appState.landscapeOrientation ? 'translateX(0)' : 'translateY(calc(100vh - 500px))'
  }

  const getInactiveTransform = () => {
    return props.appState.landscapeOrientation ? 'translateX(-500px)' : 'translateY(calc(100vh + 500px))'
  }

  const storeStyle = {
    transform: props.appState.sidebarActive ? getActiveTransform() : getInactiveTransform()
  }

  const collapseSidebar = () => {
    props.dispatch(deactivateSideBar())
  }

  return (
    <div id="sidebar" style={storeStyle}>
      <button className="sidebar-button" id="sidebar-collapse" onClick={collapseSidebar}>
        X collapse
      </button>
      <SelectedLayer selectedLayer={props.appState.selectedLayer} />
    </div>
  )
}

export default SideBar
