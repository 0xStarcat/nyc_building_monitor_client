import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GeoJSON, LayerGroup } from 'react-leaflet'
import CensusTractPopup from '../Popups/CensusTractPopup'
import { createSelector } from 'reselect'
import { updateSelectedLayer, activateSideBar } from '../../Store/AppState/actions'

class GeoJSONBoundaryGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      featuresLength: props.features.length
    }
    this.layerGroupRef = React.createRef()
    this.onClick = this.onClick.bind(this)
    this.onEachFeature = this.onEachFeature.bind(this)
  }

  onClick(event) {
    this.props.dispatch(activateSideBar())
    this.props.dispatch(updateSelectedLayer(event.target.feature.properties))
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: this.onClick
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ featuresLength: nextProps.features.length })
  }

  shouldComponentUpdate() {
    return this.props.allLayersLoaded
  }

  componentDidMount() {
    if (
      this.layerGroupRef.current &&
      this.layerGroupRef.current.leafletElement.getLayers().length === this.state.featuresLength
    ) {
      this.props.onLoad()
    }
  }

  render() {
    console.log('rendering GEOboundary')
    return (
      <LayerGroup ref={this.layerGroupRef}>
        {this.props.features.map((feature, index) => {
          return (
            <GeoJSON
              onEachFeature={this.onEachFeature}
              interactive={this.props.interactive}
              key={`ct-${index}`}
              data={feature}
              {...this.props.style(feature)}
            >
              {/*
                this.props.interactive && <CensusTractPopup feature={feature} />
              */}
            </GeoJSON>
          )
        })}
      </LayerGroup>
    )
  }
}

const mapStateToProps = state => {
  return {
    allLayersLoaded: state.appState.allLayersLoaded
  }
}

export default connect(mapStateToProps)(GeoJSONBoundaryGroup)
