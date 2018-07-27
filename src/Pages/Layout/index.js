import React from 'react'
import { connect } from 'react-redux'
import SideBar from '../../SideBar'
import MobileButtonContainer from '../../MobileButtonContainer'
import './style.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="pageLayout">
        <SideBar dispatch={this.props.dispatch} store={this.props.store} />
        {!this.props.store.appState.landscapeOrientation && (
          <MobileButtonContainer
            appState={this.props.store.appState}
            buildingsPresent={!!this.props.store.buildings.features.length}
            selectedObject={(this.props.store[this.props.store.appState.sidebarScope] || {}).selectedObject}
          />
        )}
        <div id="mainContent">{this.props.children}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    store: state
  }
}
export default connect(mapStateToProps)(Layout)
