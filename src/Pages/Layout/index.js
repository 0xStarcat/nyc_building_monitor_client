import React from 'react'
import { connect } from 'react-redux'
import SideBar from '../../SideBar'

import './style.scss'

const Layout = props => {
  return (
    <div id="pageLayout">
      <SideBar dispatch={props.dispatch} appState={props.appState} />
      <div id="mainContent">{props.children}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    appState: state.appState
  }
}
export default connect(mapStateToProps)(Layout)
