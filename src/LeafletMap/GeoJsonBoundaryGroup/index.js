import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GeoJSON, LayerGroup, Pane } from 'react-leaflet'
import CensusTractPopup from '../Popups/CensusTractPopup'
import { createSelector } from 'reselect'
import {
  activateSidebar,
  changeSidebarScope,
  changeSidebarView,
  SIDEBAR_SCOPE_CENSUS_TRACTS,
  SIDEBAR_VIEW_SCOPED_OBJECTS
} from '../../Store/AppState/actions'

import { updateSelectedObject } from '../../Store/CensusTracts/actions'

export class GeoJsonBoundaryGroup extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.onEachFeature = this.onEachFeature.bind(this)
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: this.onClick
    })
  }

  onClick(event) {
    this.props.setViewCoordinates(event.target.feature.properties.representativePoint)
    this.props.dispatch(changeSidebarView(SIDEBAR_VIEW_SCOPED_OBJECTS))
    this.props.dispatch(changeSidebarScope(SIDEBAR_SCOPE_CENSUS_TRACTS))
    this.props.dispatch(updateSelectedObject(event.target.feature.properties))
    this.props.dispatch(activateSidebar())
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
  features: PropTypes.array,
  interactive: PropTypes.bool,
  onLoad: PropTypes.func,
  setViewCoordinates: PropTypes.func,
  style: PropTypes.func
}

const mapStateToProps = state => {
  return {
    allLayersLoaded: state.appState.allLayersLoaded
  }
}

export default connect(mapStateToProps)(GeoJsonBoundaryGroup)
