import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { clearViolations } from '../../Store/Violations/actions'
import { clearServiceCalls } from '../../Store/ServiceCalls/actions'

import { GeoJSON, LayerGroup, Pane } from 'react-leaflet'
import CensusTractPopup from '../Popups/CensusTractPopup'
import { createSelector } from 'reselect'
import {
  changeSidebarScope,
  changeSidebarView,
  previewSidebar,
  SCOPE_BUILDINGS,
  SIDEBAR_VIEW_SELECTED_OBJECT
} from '../../Store/AppState/actions'

import { updateSelectedBuildingObject } from '../../Store/Buildings/actions'

export class GeoJsonBuildingLayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      features: props.features
    }

    this.geoJsonRef = React.createRef()
    this.onClick = this.onClick.bind(this)
    this.onEachFeature = this.onEachFeature.bind(this)
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: this.onClick
    })
  }

  onClick(event) {
    this.props.setViewCoordinates(event.target.feature.properties.representativePoint, 17)
    this.props.dispatch(updateSelectedBuildingObject(event.target.feature.properties))
    this.props.dispatch(changeSidebarScope(SCOPE_BUILDINGS))
    this.props.dispatch(changeSidebarView(SIDEBAR_VIEW_SELECTED_OBJECT))
    this.props.dispatch(clearViolations())
    this.props.dispatch(clearServiceCalls())
    this.props.dispatch(this.props.sidebarAction())
  }

  componentWillReceiveProps(nextProps) {
    if (this.geoJsonRef.current && this.geoJsonRef.current.leafletElement.getLayers().length) {
      this.geoJsonRef.current.leafletElement.clearLayers()
    }
    this.setState({ features: nextProps.features })
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
    console.log('rendering building geojson', this.state.features.length)
    return (
      <Pane style={{ zIndex: 420 }}>
        <LayerGroup ref={this.geoJsonRef}>
          {this.state.features.map((feature, index) => {
            return (
              <GeoJSON
                onEachFeature={this.onEachFeature}
                interactive={this.props.interactive}
                key={`building-geo-${Math.random()
                  .toString(36)
                  .substr(2, 9)}`}
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

GeoJsonBuildingLayer.propTypes = {
  features: PropTypes.array,
  interactive: PropTypes.bool,
  sidebarAction: PropTypes.func,

  style: PropTypes.func
}

const mapStateToProps = state => {
  return {
    allLayersLoaded: state.appState.allLayersLoaded
  }
}

export default connect(mapStateToProps)(GeoJsonBuildingLayer)
