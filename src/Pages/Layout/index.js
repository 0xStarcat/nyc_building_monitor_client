import React from 'react'
import PropTypes from 'prop-types'
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
        <SideBar
          buildingsPresent={this.props.buildingsPresent}
          dispatch={this.props.dispatch}
          store={this.props.store}
        />
        {!this.props.store.appState.landscapeOrientation && (
          <MobileButtonContainer
            appState={this.props.store.appState}
            buildingsPresent={this.props.buildingsPresent}
            selectedObject={(this.props.store[this.props.store.appState.sidebarScope] || {}).selectedObject}
          />
        )}
        <div id="mainContent">{this.props.children}</div>
      </div>
    )
  }
}

Layout.propTypes = {
  buildingsPresent: PropTypes.bool,
  store: PropTypes.object
}

const mapStateToProps = state => {
  return {
    store: state,
    buildingsPresent: !!state.buildings.features.length
  }
}
export default connect(mapStateToProps)(Layout)
