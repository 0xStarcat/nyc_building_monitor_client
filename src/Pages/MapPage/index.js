import React from 'react'
import { connect } from 'react-redux'
import LeafletMap from '../../LeafletMap'
import SideBar from '../../SideBar'
import MobileButtonContainer from '../../MobileButtonContainer'

import Layout from '../Layout'

class MapPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      zoomLevel: 13
    }
  }

  render() {
    return (
      <Layout>
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
        <LeafletMap
          dispatch={this.props.dispatch}
          store={this.props.store}
          mapRef={this.props.mapRef}
          zoomLevel={this.state.zoomLevel}
        />
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    store: state,
    buildingsPresent: !!state.buildings.features.length
  }
}

export default connect(mapStateToProps)(MapPage)
