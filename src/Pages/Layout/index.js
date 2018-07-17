import React from 'react'
import { connect } from 'react-redux'
import SideBar from '../../SideBar'

import './style.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="pageLayout">
        <SideBar dispatch={this.props.dispatch} appState={this.props.appState} />
        <div id="mainContent">{this.props.children}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    appState: state.appState
  }
}
export default connect(mapStateToProps)(Layout)
