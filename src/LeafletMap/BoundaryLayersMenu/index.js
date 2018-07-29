import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LayersControl, TileLayer, Pane } from 'react-leaflet'

import {
  incomeMedianLayerStyle,
  rentMedianLayerStyle,
  rentChangeLayerStyle,
  racePercentWhite2010,
  serviceCallsPercentOpenOneMonth,
  neighborhoodBoundaryStyle
} from '../GeoJsonBoundaryStyles'

import ScopedMenu from './ScopedMenu'

import GeoJsonBoundaryGroup from '../GeoJsonBoundaryGroup'
import {
  allLayersLoaded,
  SCOPE_CENSUS_TRACTS,
  SCOPE_NEIGHBORHOODS,
  BASE_LAYER_MEDIAN_INCOME,
  BASE_LAYER_MEDIAN_RENT,
  BASE_LAYER_MEDIAN_RENT_CHANGE,
  BASE_LAYER_WHITE_POPULATION,
  BASE_LAYER_OPEN_311
} from '../../Store/AppState/actions'

const { BaseLayer, Overlay } = LayersControl

class BoundaryLayersMenu extends Component {
  constructor(props) {
    super(props)

    this.layerControlRef = React.createRef()
    this.layerLoaded = this.layerLoaded.bind(this)
    this.layersLoaded = 0

    this.tileLayerLoaded = false
    this.getSelectedObjectId = this.getSelectedObjectId.bind(this)
    this.tileLayerLoadComplete = this.tileLayerLoadComplete.bind(this)
    this.checkLayerLoadStatus = this.checkLayerLoadStatus.bind(this)
  }

  shouldComponentUpdate() {
    return !this.props.store.allLayersLoaded
  }

  componentDidMount() {
    if (this.layerControlRef.current) {
      this.layerControlRef.current.leafletElement._container.style.display = 'none'
    }
  }

  getSelectedObjectId() {
    const selectedObject = (this.props.store[this.props.store.appState.baseLayerScope] || {}).selectedObject
    return selectedObject ? selectedObject.id : null
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

  render() {
    return (
      <ScopedMenu
        appState={this.props.store.appState}
        features={this.props.store[this.props.store.appState.baseLayerScope].features}
        layerControlRef={this.layerControlRef}
        layerLoaded={this.layerLoaded}
        position={this.props.position}
        setViewCoordinates={this.props.setViewCoordinates}
        getSelectedObjectId={this.getSelectedObjectId}
        tileLayerLoadComplete={this.tileLayerLoadComplete}
      />
    )
  }
}

BoundaryLayersMenu.propTypes = {
  position: PropTypes.string,
  setViewCoordinates: PropTypes.func,
  store: PropTypes.object
}

const mapStateToProps = state => {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(BoundaryLayersMenu)
