import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LayersMenu from './LayersMenu'
import GeoJsonBuildingLayer from './GeoJsonBuildingLayer'
import Loading from '../SharedComponents/Loading'
import { initialBoundaryDataLoaded, layersLoaded } from '../SharedUtilities/storeUtils'
import { Map, TileLayer, ZoomControl } from 'react-leaflet'
import { buildingStyle } from './GeoJsonStyles'
import './style.scss'

export default class LeafletMap extends Component {
  constructor(props) {
    super()
    this.state = {
      lon: -73.9671,
      lat: 40.6881,
      zoom: 13,
      buildings: props.store.buildings.features
    }

    this.mapRef = React.createRef()
    this.buildingLayerRef = React.createRef()
    this.setViewCoordinates = this.setViewCoordinates.bind(this)
  }

  setViewCoordinates(point) {
    const topOffset = this.props.store.appState.landscapeOrientation ? 0 : -0.0075
    const leftOffset = this.props.store.appState.landscapeOrientation ? -0.01 : 0
    const latLon = [point['coordinates'][1] + topOffset, point['coordinates'][0] + leftOffset]

    this.setState({
      lon: latLon[1],
      lat: latLon[0],
      zoom: 15
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      buildings: nextProps.store.buildings.features
    })
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
          ref={this.mapRef}
          zoom={this.state.zoom}
          zoomControl={false}
        >
          {!(initialBoundaryDataLoaded(this.props.store) && layersLoaded(this.props.store)) && <Loading />}
          <ZoomControl position="topright" />
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://api.mapbox.com/styles/v1/starcat/cjjmbqf4pg6vq2rlqun4aquq9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RhcmNhdCIsImEiOiJjamlpYmlsc28wbjlmM3FwbXdwaXozcWEzIn0.kLmWiUbmdqNLA1atmnTXXA"
          />
          <GeoJsonBuildingLayer
            features={this.state.buildings}
            interactive={true}
            geoJsonRef={this.buildingLayerRef}
            setViewCoordinates={this.setViewCoordinates}
            style={buildingStyle}
          />
          {initialBoundaryDataLoaded(this.props.store) && (
            <LayersMenu position="topright" setViewCoordinates={this.setViewCoordinates} />
          )}
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
