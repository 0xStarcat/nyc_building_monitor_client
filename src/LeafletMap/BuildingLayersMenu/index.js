import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FeatureGroup, LayerGroup, LayersControl, GeoJSON, TileLayer, Pane } from 'react-leaflet'

import GeoJsonBuildingLayer from '../GeoJsonBuildingLayer'

import { buildingClassStyle, violationBuildingStyle, saleBuildingStyle } from '../GeoJsonBuildingStyles'
import {
  activateSidebar,
  previewSidebar,
  BASE_LAYER_BUILDING_CATEGORIES,
  BASE_LAYER_TOTAL_VIOLATIONS,
  BASE_LAYER_TOTAL_BUILDING_OPEN_311
} from '../../Store/AppState/actions'

const { BaseLayer, Overlay } = LayersControl

class BuildingLayersMenu extends Component {
  constructor(props) {
    super(props)

    this.layerControlRef = React.createRef()
  }

  componentDidMount() {
    if (this.layerControlRef.current) {
      this.layerControlRef.current.leafletElement._container.style.display = 'none'
    }
  }

  render() {
    return (
      <LayersControl className="hidden" collapsed={true} position={this.props.position} ref={this.layerControlRef}>
        <BaseLayer checked={this.props.appState.buildingBaseLayer === BASE_LAYER_BUILDING_CATEGORIES} name="Plain">
          <GeoJsonBuildingLayer
            features={this.props.buildings}
            interactive={true}
            sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
            style={buildingClassStyle}
          />
        </BaseLayer>
        <BaseLayer
          checked={this.props.appState.buildingBaseLayer === BASE_LAYER_TOTAL_VIOLATIONS}
          name="Building Violations"
        >
          <GeoJsonBuildingLayer
            features={this.props.buildings}
            interactive={true}
            sidebarAction={this.props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
            style={violationBuildingStyle}
          />
        </BaseLayer>
        <BaseLayer
          checked={this.props.appState.buildingBaseLayer === BASE_LAYER_TOTAL_BUILDING_OPEN_311}
          name="Building Sales"
        >
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
