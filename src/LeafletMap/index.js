import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BoundaryLayersMenu from './BoundaryLayersMenu'
import BuildingLayersMenu from './BuildingLayersMenu'
import Loading from '../SharedComponents/Loading'

import { initialBoundaryDataLoaded, nothingLoading } from '../SharedUtilities/storeUtils'
import { Map, TileLayer, ZoomControl } from 'react-leaflet'

import './style.scss'

export default class LeafletMap extends Component {
  constructor() {
    super()
  }

  render() {
    const position = [40.6881, -73.9671]
    return (
      <div>
        <Map
          center={position}
          doubleClickZoom={false}
          id="leaflet-map"
          minZoom={12}
          maxZoom={20}
          ref={this.props.mapRef}
          zoom={13}
          zoomControl={false}
        >
          {!nothingLoading(this.props.store) && <Loading />}
          <ZoomControl position="topright" />
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://api.mapbox.com/styles/v1/starcat/cjjmbqf4pg6vq2rlqun4aquq9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RhcmNhdCIsImEiOiJjamlpYmlsc28wbjlmM3FwbXdwaXozcWEzIn0.kLmWiUbmdqNLA1atmnTXXA"
          />

          {initialBoundaryDataLoaded(this.props.store) && (
            <BoundaryLayersMenu setViewCoordinates={this.props.setViewCoordinates} />
          )}
          {!!this.props.store.buildings.features.length && (
            <BuildingLayersMenu position="topright" setViewCoordinates={this.props.setViewCoordinates} />
          )}
        </Map>
      </div>
    )
  }
}

LeafletMap.propTypes = {
  dispatch: PropTypes.func,
  setViewCoordinates: PropTypes.func,
  store: PropTypes.object,
  position: PropTypes.shape({
    lon: PropTypes.number,
    lat: PropTypes.number
  }),
  zoom: PropTypes.number
}
