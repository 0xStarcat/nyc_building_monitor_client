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
  BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311,
  SIDEBAR_STATE_PREVIEW
} from '../../Store/AppState/actions'

const { BaseLayer } = LayersControl

class BuildingLayersMenu extends Component {
  constructor(props) {
    super(props)

    this.layerControlRef = React.createRef()
    this.getLayer = this.getLayer.bind(this)
    this.sidebarAction = this.sidebarAction.bind(this)
  }

  sidebarAction(id) {
    if (this.props.appState.landscapeOrientation) {
      return activateSidebar()
    } else {
      if (
        this.props.appState.sidebarState === SIDEBAR_STATE_PREVIEW &&
        (this.props.buildings.selectedObject || {}).id === id
      ) {
        console.log('hey')
        return activateSidebar()
      } else return previewSidebar()
    }
  }

  getLayer() {
    switch (this.props.appState.buildingBaseLayer) {
      case BASE_LAYER_BUILDING_CATEGORIES:
        return (
          <BaseLayer checked name="Building Categories">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings.features}
              interactive={true}
              sidebarAction={this.sidebarAction}
              style={buildingClassStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BUILDING_CATEGORIES:
        return (
          <BaseLayer checked name="Building Categories">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings.features}
              interactive={true}
              sidebarAction={this.sidebarAction}
              style={buildingClassStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BUILDING_TOTAL_VIOLATIONS:
        return (
          <BaseLayer checked name="Building Violations">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings.features}
              interactive={true}
              sidebarAction={this.sidebarAction}
              style={violationBuildingStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BUILDING_OPEN_311:
        return (
          <BaseLayer checked name="Building Open 311 Calls">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings.features}
              interactive={true}
              sidebarAction={this.sidebarAction}
              style={serviceCallOpenBuildingStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311:
        return (
          <BaseLayer checked name="311 call average response">
            <GeoJsonBuildingLayer
              setViewCoordinates={this.props.setViewCoordinates}
              features={this.props.buildings.features}
              interactive={true}
              sidebarAction={this.sidebarAction}
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
    return (
      <LayersControl className="hidden" collapsed={true} position={this.props.position} ref={this.layerControlRef}>
        {this.getLayer()}
      </LayersControl>
    )
  }
}

const mapStateToProps = state => {
  return {
    buildings: state.buildings,
    appState: state.appState
  }
}

export default connect(mapStateToProps)(BuildingLayersMenu)
