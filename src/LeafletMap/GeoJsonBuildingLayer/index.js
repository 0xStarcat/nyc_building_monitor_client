import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GeoJSON, LayerGroup, Pane } from 'react-leaflet'
import CensusTractPopup from '../Popups/CensusTractPopup'
import { createSelector } from 'reselect'
import { updateSelectedLayer, activateSideBar } from '../../Store/AppState/actions'

export class GeoJsonBuildingLayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      featuresLength: props.features.length
    }
    this.onClick = this.onClick.bind(this)
    this.onEachFeature = this.onEachFeature.bind(this)
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: this.onClick
    })
  }

  onClick(event) {
    console.log(event.target.feature.properties)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ featuresLength: nextProps.features.length })
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
      <Pane style={{ zIndex: 420 }}>
        <LayerGroup ref={this.props.geoJsonRef}>
          {this.props.features.map((feature, index) => {
            return (
              <GeoJSON
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

GeoJsonBuildingLayer.propTypes = {
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

export default connect(mapStateToProps)(GeoJsonBuildingLayer)
