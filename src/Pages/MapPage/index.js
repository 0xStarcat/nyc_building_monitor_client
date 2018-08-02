import React from 'react'
import { connect } from 'react-redux'
import LeafletMap from '../../LeafletMap'

import Layout from '../Layout'
import SideBar from '../../SideBar'
import MobileButtonContainer from '../../MobileButtonContainer'
import MapLegend from '../../LeafletMap/MapLegend'
import SwitchViewButton from '../../SharedComponents/SwitchViewButton'
import SearchModule from '../../SearchModule'

import { activateSidebar, previewSidebar, SIDEBAR_VIEW_LINKS_MENU } from '../../Store/AppState/actions'

import './style.scss'

export class MapPage extends React.Component {
  constructor(props) {
    super(props)

    this.setViewCoordinates = this.setViewCoordinates.bind(this)

    this.mapRef = React.createRef()
  }

  setViewCoordinates(point, zoom) {
    const currentZoom = this.mapRef.current.leafletElement.getZoom()
    const zoomLevel = zoom > currentZoom ? zoom : currentZoom

    const topPortraitOffset = zoomLevel > 18 ? -(0.003 / zoomLevel) : -(0.017 / zoomLevel)
    const topOffset = this.props.store.appState.landscapeOrientation ? 0 : topPortraitOffset // -0.0075

    const leftLandscapeZoomOffset = zoomLevel > 14 ? -(0.035 / zoomLevel - 0.001) : -(0.5 / zoomLevel - 0.02)
    const leftOffset = this.props.store.appState.landscapeOrientation ? leftLandscapeZoomOffset : 0 //-0.01 : 0
    const latLon = [point['coordinates'][1] + topOffset, point['coordinates'][0] + leftOffset]

    if (this.mapRef.current) {
      this.mapRef.current.leafletElement.setView([latLon[0], latLon[1]], zoomLevel, {
        animate: true,
        duration: 0.5,
        easeLinearity: 1
      })
    }
  }

  render() {
    return (
      <Layout>
        <SideBar
          setViewCoordinates={this.setViewCoordinates}
          buildingsPresent={this.props.buildingsPresent}
          dispatch={this.props.dispatch}
          router={this.props.router}
          store={this.props.store}
        />
        {!this.props.store.appState.landscapeOrientation && (
          <MobileButtonContainer
            appState={this.props.store.appState}
            buildingsPresent={this.props.buildingsPresent}
            setViewCoordinates={this.setViewCoordinates}
            selectedObject={(this.props.store[this.props.store.appState.sidebarScope] || {}).selectedObject}
          />
        )}
        <MapLegend
          baseLayer={this.props.store.appState.baseLayer}
          buildingBaseLayer={this.props.store.appState.buildingBaseLayer}
          dispatch={this.props.dispatch}
          legendScopeBoundaries={this.props.store.appState.legendScopeBoundaries}
          open={this.props.store.appState.legendOpen}
        />
        <SwitchViewButton
          className="more-info-button hover-shadow"
          dispatchAction={this.props.store.appState.landscapeOrientation ? activateSidebar : previewSidebar}
          viewSwitch={SIDEBAR_VIEW_LINKS_MENU}
        >
          ?
        </SwitchViewButton>
        <SearchModule setViewCoordinates={this.setViewCoordinates} />
        <LeafletMap
          buildingsPresent={this.props.buildingsPresent}
          dispatch={this.props.dispatch}
          mapRef={this.mapRef}
          setViewCoordinates={this.setViewCoordinates}
          store={this.props.store}
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
