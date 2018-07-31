import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ScopedMenu from './ScopedMenu'

import { allLayersLoaded } from '../../Store/AppState/actions'

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

  componentDidMount() {
    if (this.layerControlRef.current) {
      this.layerControlRef.current.leafletElement._container.style.display = 'none'
    }
  }

  getSelectedObjectId() {
    return this.props.selectedObject ? this.props.selectedObject.id : null
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
        baseLayer={this.props.baseLayer}
        baseLayerScope={this.props.baseLayerScope}
        dispatch={this.props.dispatch}
        features={this.props.features}
        landscapeOrientation={this.props.landscapeOrientation}
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
  setViewCoordinates: PropTypes.func
}

const mapStateToProps = state => {
  return {
    allLayersLoaded: state.appState.allLayersLoaded,
    baseLayer: state.appState.baseLayer,
    baseLayerScope: state.appState.baseLayerScope,
    buildingBaseLayer: state.appState.buildingBaseLayer,
    features: state[state.appState.baseLayerScope].features,
    landscapeOrientation: state.appState.landscapeOrientation,
    selectedObject: (state[state.appState.baseLayerScope] || {}).selectedObject
  }
}

export default connect(mapStateToProps)(BoundaryLayersMenu)
