import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FeatureGroup, LayerGroup, LayersControl, GeoJSON, TileLayer, Pane } from 'react-leaflet'

import GeoJsonBuildingLayer from '../GeoJsonBuildingLayer'

import { buildingStyle, violationBuildingStyle, saleBuildingStyle } from '../GeoJsonBuildingStyles'

const { BaseLayer, Overlay } = LayersControl

class BuildingLayersMenu extends Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  render() {
    return (
      <LayersControl collapsed={true} position={this.props.position}>
        <BaseLayer checked name="Plain">
          <GeoJsonBuildingLayer features={this.props.buildings} interactive={true} style={buildingStyle} />
        </BaseLayer>
        <BaseLayer name="Building Violations">
          <GeoJsonBuildingLayer features={this.props.buildings} interactive={true} style={violationBuildingStyle} />
        </BaseLayer>
        <BaseLayer name="Building Sales">
          <GeoJsonBuildingLayer features={this.props.buildings} interactive={true} style={saleBuildingStyle} />
        </BaseLayer>
      </LayersControl>
    )
  }
}

const mapStateToProps = state => {
  return {
    buildings: state.buildings.features
  }
}

export default connect(mapStateToProps)(BuildingLayersMenu)
