import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FeatureGroup, LayerGroup, LayersControl, GeoJSON, TileLayer, Pane } from 'react-leaflet'

import GeoJsonBuildingLayer from '../GeoJsonBuildingLayer'

import { buildingStyle, violationBuildingStyle, saleBuildingStyle } from '../GeoJsonBuildingStyles'
import { activateSidebar, previewSidebar } from '../../Store/AppState/actions'

const { BaseLayer, Overlay } = LayersControl

class BuildingLayersMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LayersControl collapsed={true} position={this.props.position}>
        <BaseLayer checked name="Plain">
          <GeoJsonBuildingLayer
            features={this.props.buildings}
            interactive={true}
            sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
            style={buildingStyle}
          />
        </BaseLayer>
        <BaseLayer name="Building Violations">
          <GeoJsonBuildingLayer
            features={this.props.buildings}
            interactive={true}
            sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
            style={violationBuildingStyle}
          />
        </BaseLayer>
        <BaseLayer name="Building Sales">
          <GeoJsonBuildingLayer
            features={this.props.buildings}
            interactive={true}
            sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
            style={saleBuildingStyle}
          />
        </BaseLayer>
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
