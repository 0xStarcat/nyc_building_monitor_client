import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GeoJSON, LayerGroup, Pane } from 'react-leaflet'
import {
  setLegendScopeBuildings,
  changeSidebarScope,
  changeSidebarView,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SIDEBAR_VIEW_SELECTED_OBJECT
} from '../../Store/AppState/actions'

import { selectNewSelectedCTObject } from '../../Store/CensusTracts/actions'
import { selectNewSelectedNeighborhoodObject } from '../../Store/Neighborhoods/actions'

import { readBuildingsByScope } from '../../Store/Buildings/actions'

export class GeoJsonBoundaryGroup extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.onEachFeature = this.onEachFeature.bind(this)
    this.getSelectedObjectFunction = this.getSelectedObjectFunction.bind(this)
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: this.onClick
    })
  }

  getSelectedObjectFunction(event) {
    switch (this.props.scope) {
      case SCOPE_NEIGHBORHOODS:
        return selectNewSelectedNeighborhoodObject(event.target.feature.properties)
      case SCOPE_CENSUS_TRACTS:
        return selectNewSelectedCTObject(event.target.feature.properties)
    }
  }

  onClick(event) {
    const layerProperties = event.target.feature.properties
    this.props.setViewCoordinates(
      layerProperties.representativePoint,
      this.props.scope === SCOPE_NEIGHBORHOODS ? 14 : 15
    )
    this.props.dispatch(setLegendScopeBuildings())
    this.props.dispatch(changeSidebarScope(this.props.scope))
    this.props.dispatch(changeSidebarView(SIDEBAR_VIEW_SELECTED_OBJECT))
    this.props.dispatch(this.props.sidebarAction())
    if (layerProperties.id !== this.props.getSelectedObjectId())
      this.props.dispatch(readBuildingsByScope(this.props.baseLayerScope, layerProperties.id))
    this.props.dispatch(this.getSelectedObjectFunction(event))
  }

  shouldComponentUpdate() {
    return this.props.allLayersLoaded
  }

  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  render() {
    console.log('rendering GEOboundary')
    return (
      <Pane style={{ zIndex: 400 }}>
        <LayerGroup>
          {this.props.features.map((feature, index) => {
            return (
              <GeoJSON
                ref={this.props.geoJsonRef}
                onEachFeature={this.onEachFeature}
                interactive={this.props.interactive}
                key={`ct-${index}`}
                data={feature}
                {...this.props.style(feature)}
              />
            )
          })}
        </LayerGroup>
      </Pane>
    )
  }
}

GeoJsonBoundaryGroup.propTypes = {
  baseLayerScope: PropTypes.string,
  features: PropTypes.array,
  interactive: PropTypes.bool,
  onLoad: PropTypes.func,
  setViewCoordinates: PropTypes.func,
  getSelectedObjectId: PropTypes.func,
  scope: PropTypes.string,
  sidebarAction: PropTypes.func,
  style: PropTypes.func
}

const mapStateToProps = state => {
  return {
    allLayersLoaded: state.appState.allLayersLoaded
  }
}

export default connect(mapStateToProps)(GeoJsonBoundaryGroup)
