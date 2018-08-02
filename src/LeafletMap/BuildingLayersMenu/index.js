import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FeatureGroup, LayerGroup, LayersControl, GeoJSON, TileLayer, Pane } from 'react-leaflet'

import GeoJsonBuildingLayer from '../GeoJsonBuildingLayer'

import {
  buildingClassStyle,
  violationBuildingStyle,
  serviceCallOpenBuildingStyle,
  averageDaysToResolveServiceCalls
} from '../GeoJsonBuildingStyles'
import {
  activateSidebar,
  previewSidebar,
  BASE_LAYER_BUILDING_CATEGORIES,
  BASE_LAYER_BUILDING_TOTAL_VIOLATIONS,
  BASE_LAYER_BUILDING_OPEN_311,
  BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311
} from '../../Store/AppState/actions'

const { BaseLayer, Overlay } = LayersControl

class BuildingLayersMenu extends Component {
  constructor(props) {
    super(props)

    this.layerControlRef = React.createRef()
    this.getLayer = this.getLayer.bind(this)
  }

  getLayer() {
    switch (this.props.appState.buildingBaseLayer) {
      case BASE_LAYER_BUILDING_CATEGORIES:
        return (
          <BaseLayer checked name="Building Categories">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings}
              interactive={true}
              sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
              style={buildingClassStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BUILDING_CATEGORIES:
        return (
          <BaseLayer checked name="Building Categories">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings}
              interactive={true}
              sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
              style={buildingClassStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BUILDING_TOTAL_VIOLATIONS:
        return (
          <BaseLayer checked name="Building Violations">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings}
              interactive={true}
              sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
              style={violationBuildingStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BUILDING_OPEN_311:
        return (
          <BaseLayer checked name="Building Open 311 Calls">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings}
              interactive={true}
              sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
              style={serviceCallOpenBuildingStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311:
        return (
          <BaseLayer checked name="311 call average response">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings}
              interactive={true}
              sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
              style={averageDaysToResolveServiceCalls}
            />
          </BaseLayer>
        )
    }
  }

  componentDidMount() {
    if (this.layerControlRef.current) {
      this.layerControlRef.current.leafletElement._container.style.display = 'none'
    }
  }

  render() {
    console.log(this.props.buildings)
    return (
      <LayersControl className="hidden" collapsed={true} position={this.props.position} ref={this.layerControlRef}>
        {this.getLayer()}
      </LayersControl>
    )
  }
}

const mapStateToProps = state => {
  return {
    buildings: state.buildings.features,
    appState: state.appState
  }
}

export default connect(mapStateToProps)(BuildingLayersMenu)
