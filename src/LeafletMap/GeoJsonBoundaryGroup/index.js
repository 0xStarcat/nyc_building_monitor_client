import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { GeoJSON, LayerGroup, Pane } from 'react-leaflet'

export class GeoJsonBoundaryGroup extends Component {
  constructor(props) {
    super(props)

    this.onEachFeature = this.onEachFeature.bind(this)
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: this.props.onClick
    })
  }

  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  shouldComponentUpdate() {
    return false
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
  onClick: PropTypes.func,
  onLoad: PropTypes.func,
  style: PropTypes.func
}

export default GeoJsonBoundaryGroup
