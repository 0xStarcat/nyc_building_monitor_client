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
    this.tileLayerLoadComplete = this.tileLayerLoadComplete.bind(this)
    this.checkLayerLoadStatus = this.checkLayerLoadStatus.bind(this)
  }

  componentDidMount() {
    if (this.layerControlRef.current) {
      this.layerControlRef.current.leafletElement._container.style.display = 'none'
    }
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
        layerControlRef={this.layerControlRef}
        layerLoaded={this.layerLoaded}
        setViewCoordinates={this.props.setViewCoordinates}
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
    baseLayer: state.appState.baseLayer,
    baseLayerScope: state.appState.baseLayerScope,
    features: state[state.appState.baseLayerScope].features
  }
}

export default connect(mapStateToProps)(BoundaryLayersMenu)
