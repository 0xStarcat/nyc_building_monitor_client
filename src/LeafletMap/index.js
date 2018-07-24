import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoundaryLayersMenu from './BoundaryLayersMenu'
import BuildingLayersMenu from './BuildingLayersMenu'
import GeoJsonBuildingLayer from './GeoJsonBuildingLayer'
import Loading from '../SharedComponents/Loading'
import { initialBoundaryDataLoaded, nothingLoading, layersLoaded } from '../SharedUtilities/storeUtils'
import { Map, TileLayer, ZoomControl } from 'react-leaflet'
import { buildingStyle } from './GeoJsonStyles'
import './style.scss'

export default class LeafletMap extends Component {
  constructor(props) {
    super()
    this.state = {
      lon: -73.9671,
      lat: 40.6881,
      zoom: 13
    }

    this.mapRef = React.createRef()
    this.setViewCoordinates = this.setViewCoordinates.bind(this)
  }

  setViewCoordinates(point) {
    const zoomLevel = this.mapRef.current.leafletElement.getZoom()
    const topOffset = this.props.store.appState.landscapeOrientation ? 0 : -(0.1 / zoomLevel) // -0.0075

    const leftLandscapeZoomOffset = zoomLevel > 14 ? -(0.035 / zoomLevel - 0.001) : -(0.5 / zoomLevel - 0.02)
    const leftOffset = this.props.store.appState.landscapeOrientation ? leftLandscapeZoomOffset : 0 //-0.01 : 0
    const latLon = [point['coordinates'][1] + topOffset, point['coordinates'][0] + leftOffset]

    if (this.mapRef.current) {
      this.mapRef.current.leafletElement.panTo([latLon[0], latLon[1]], {
        animate: true,
        duration: 0.5,
        easeLinearity: 1
      })
    }
  }

  render() {
    console.log('map render')
    const position = [this.state.lat, this.state.lon]
    return (
      <div>
        <Map
          center={position}
          doubleClickZoom={false}
          id="leaflet-map"
          minZoom={10}
          ref={this.mapRef}
          zoom={this.state.zoom}
          zoomControl={false}
        >
          {!nothingLoading(this.props.store) && <Loading />}
          <ZoomControl position="topright" />
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://api.mapbox.com/styles/v1/starcat/cjjmbqf4pg6vq2rlqun4aquq9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RhcmNhdCIsImEiOiJjamlpYmlsc28wbjlmM3FwbXdwaXozcWEzIn0.kLmWiUbmdqNLA1atmnTXXA"
          />

          {initialBoundaryDataLoaded(this.props.store) && (
            <BoundaryLayersMenu position="topright" setViewCoordinates={this.setViewCoordinates} />
          )}
          {this.props.store.buildings.features.length && <BuildingLayersMenu position="topright" />}
        </Map>
      </div>
    )
  }
}

LeafletMap.propTypes = {
  store: PropTypes.object,
  position: PropTypes.shape({
    lon: PropTypes.number,
    lat: PropTypes.number
  }),
  zoom: PropTypes.number
}
