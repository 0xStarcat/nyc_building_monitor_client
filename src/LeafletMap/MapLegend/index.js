import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { RightArrow } from '../../SharedStyles/icons'

import './style.scss'

export default class MapLegend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
    this.toggleLegend = this.toggleLegend.bind(this)
  }

  toggleLegend() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div className={classNames('map-legend', { 'open-legend': this.state.open })}>
        <div className="legend-button highlight-button-left" onClick={this.toggleLegend}>
          <i>
            <RightArrow className={classNames({ 'svg-flip': !this.state.open })} />
          </i>
        </div>
        {this.state.open && (
          <div className="legend-wrapper">
            <div className="legend-content">
              <div className="legend-scale-column">
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">10</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">100</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">10000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">100000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1000000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">10000000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1000</label>
                </div>
              </div>
            </div>
            <div className="legend-title">Title!</div>
          </div>
        )}
      </div>
    )
  }
}

MapLegend.propTypes = {
  baseLayer: PropTypes.string,
  baseLayerScope: PropTypes.string,
  buildingBaseLayer: PropTypes.string,
  sidebarScope: PropTypes.string
}
