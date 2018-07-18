import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FeatureGroup, LayerGroup, LayersControl, GeoJSON, TileLayer, Pane } from 'react-leaflet'

import {
  incomeMedianLayerStyle,
  rentMedianLayerStyle,
  rentChangeLayerStyle,
  violationsPerBuildingLayerStyle,
  serviceCallsTotalLayerStyle,
  serviceCallsPercentViolationLayerStyle,
  salesTotalLayerStyle,
  permitsTotalLayerStyle,
  racePercentWhite2010,
  serviceCallsPercentOpenOneMonth,
  neighborhoodBoundaryStyle
} from '../GeoJsonStyles'

import GeoJsonBoundaryGroup from '../GeoJsonBoundaryGroup'
import CensusTractPopup from '../Popups/CensusTractPopup'
import { allLayersLoaded } from '../../Store/AppState/actions'

const { BaseLayer, Overlay } = LayersControl

class BoundaryLayersMenu extends Component {
  constructor(props) {
    super(props)

    this.layerControlRef = React.createRef()
    this.layerLoaded = this.layerLoaded.bind(this)
    this.layersLoaded = 0

    this.tileLayerLoaded = false
    this.tileLayerLoadComplete = this.tileLayerLoadComplete.bind(this)
    this.checkLayerLoadStatus = this.checkLayerLoadStatus.bind(this)
  }

  layerLoaded() {
    this.layersLoaded++
    this.checkLayerLoadStatus()
  }

  tileLayerLoadComplete() {
    this.tileLayerLoaded = true
    this.checkLayerLoadStatus()
  }

  checkLayerLoadStatus() {
    if (
      this.layerControlRef.current &&
      this.layerControlRef.current.leafletElement._layers.length &&
      this.layersLoaded >= this.layerControlRef.current.leafletElement._layers.length - 1 &&
      this.tileLayerLoaded
    ) {
      this.props.dispatch(allLayersLoaded())
      this.layersLoaded = 0
      this.tileLayerLoaded = false
    }
  }

  shouldComponentUpdate() {
    return !this.props.store.allLayersLoaded
  }

  render() {
    return (
      <LayersControl collapsed={true} ref={this.layerControlRef} position={this.props.position}>
        {/*<Overlay ref={this.props.neighborhoodOverlayRef} checked name="Neighborhood Boundaries">
          <Pane style={{ zIndex: 400 }}>
            <GeoJsonBoundaryGroup
              onLoad={this.layerLoaded}
              features={this.props.store.neighborhoods.features}
              interactive={false}
              style={neighborhoodBoundaryStyle}
            />
          </Pane>
        </Overlay>*/}
        <Overlay checked name="Street and Landmark Labels">
          <Pane style={{ zIndex: 410 }}>
            <TileLayer
              onLoad={this.tileLayerLoadComplete}
              url="https://api.mapbox.com/styles/v1/starcat/cjjm9p2z85m3j2rme8ectwukv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RhcmNhdCIsImEiOiJjamlpYmlsc28wbjlmM3FwbXdwaXozcWEzIn0.kLmWiUbmdqNLA1atmnTXXA"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          </Pane>
        </Overlay>
        <BaseLayer checked name="Median Income, 2017">
          <GeoJsonBoundaryGroup
            setViewCoordinates={this.props.setViewCoordinates}
            onLoad={this.layerLoaded}
            interactive={true}
            features={this.props.store.censusTracts.features}
            style={incomeMedianLayerStyle}
          />
        </BaseLayer>
        <BaseLayer name="Median Rent, 2017">
          <GeoJsonBoundaryGroup
            setViewCoordinates={this.props.setViewCoordinates}
            onLoad={this.layerLoaded}
            interactive={true}
            features={this.props.store.censusTracts.features}
            style={rentMedianLayerStyle}
          />
        </BaseLayer>
        <BaseLayer name="Rent Change, 2011 - 2017">
          <GeoJsonBoundaryGroup
            setViewCoordinates={this.props.setViewCoordinates}
            onLoad={this.layerLoaded}
            interactive={true}
            features={this.props.store.censusTracts.features}
            style={rentChangeLayerStyle}
          />
        </BaseLayer>
        <BaseLayer name="% White 2010">
          <GeoJsonBoundaryGroup
            setViewCoordinates={this.props.setViewCoordinates}
            onLoad={this.layerLoaded}
            interactive={true}
            features={this.props.store.censusTracts.features}
            style={racePercentWhite2010}
          />
        </BaseLayer>
        <BaseLayer name="Percent Service Calls Open 1 Month">
          <GeoJsonBoundaryGroup
            setViewCoordinates={this.props.setViewCoordinates}
            onLoad={this.layerLoaded}
            interactive={true}
            features={this.props.store.censusTracts.features}
            style={serviceCallsPercentOpenOneMonth}
          />
        </BaseLayer>
      </LayersControl>
    )
  }
}

const mapStateToProps = state => {
  return {
    store: {
      neighborhoods: state.neighborhoods,
      censusTracts: state.censusTracts,
      allLayersLoaded: state.appState.allLayersLoaded
    }
  }
}

export default connect(mapStateToProps)(BoundaryLayersMenu)
