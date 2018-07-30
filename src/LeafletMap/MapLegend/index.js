import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { RightArrow } from '../../SharedStyles/icons'
import { getLegendContent, getLegendTitle } from './utils/legendUtils'
import { SCOPE_BUILDINGS, SCOPE_NEIGHBORHOODS, SCOPE_CENSUS_TRACTS } from '../../Store/AppState/actions'

import './style.scss'

export default class MapLegend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleLegend = this.toggleLegend.bind(this)
    this.getScope = this.getScope.bind(this)
  }

  toggleLegend() {
    this.setState({
      open: !this.state.open
    })
  }

  getScope() {
    if (this.props.buildingsPresent && this.props.legendScopeBoundaries) return this.props.buildingBaseLayer
    else return this.props.baseLayer
  }

  render() {
    return (
      <div className={classNames('map-legend', { 'open-legend': this.state.open })}>
        <div className="legend-button highlight-button-left" onClick={this.toggleLegend}>
          <RightArrow className={classNames({ 'svg-flip': !this.state.open })} />
        </div>
        {this.state.open && (
          <div className="legend-wrapper">
            <div className="legend-content">
              <div className="legend-scale-column">{getLegendContent(this.getScope())}</div>
            </div>
            <div className="legend-title">{getLegendTitle(this.getScope())}</div>
          </div>
        )}
      </div>
    )
  }
}

MapLegend.propTypes = {
  baseLayer: PropTypes.string,
  buildingsPresent: PropTypes.bool,
  buildingBaseLayer: PropTypes.string,
  legendScopeBoundaries: PropTypes.bool
}
