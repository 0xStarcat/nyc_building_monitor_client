import React from 'react'
import { connect } from 'react-redux'
import LeafletMap from '../../LeafletMap'
import SideBar from '../../SideBar'
import MobileButtonContainer from '../../MobileButtonContainer'
import MapLegend from '../../LeafletMap/MapLegend'
import Layout from '../Layout'

export class MapPage extends React.Component {
  constructor(props) {
    super(props)

    this.setViewCoordinates = this.setViewCoordinates.bind(this)

    this.mapRef = React.createRef()
  }

  setViewCoordinates(point, zoom) {
    const currentZoom = this.mapRef.current.leafletElement.getZoom()
    const zoomLevel = zoom > currentZoom ? zoom : currentZoom

    const topPortraitOffset = zoomLevel > 18 ? -(0.0025 / zoomLevel) : -(0.01 / zoomLevel)
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
        <LeafletMap
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
