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
        <SideBar dispatch={this.props.dispatch} store={this.props.store} selectedObjects={this.props.selectedObjects} />
        {!this.props.store.appState.landscapeOrientation && (
          <MobileButtonContainer appState={this.props.store.appState} />
        )}
        <div id="mainContent">{this.props.children}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    store: state,
    selectedObjects: {
      neighborhoods: {
        object: state.neighborhoods.selectedObject
      },
      censusTracts: {
        object: state.censusTracts.selectedObject
      },
      buildings: {
        object: state.buildings.selectedObject
      },
      violations: {
        objects: state.violations.selectedObjects,
        object: state.violations.selectedObject
      },
      serviceCalls: {
        objects: state.serviceCalls.selectedObjects,
        object: state.serviceCalls.selectedObject
      }
    }
  }
}
export default connect(mapStateToProps)(Layout)
