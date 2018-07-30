import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { RightArrow, CloseIcon } from '../../SharedStyles/icons'
import { getLegendContent, getLegendTitle } from './utils/legendUtils'
import { openLegend, closeLegend } from '../../Store/AppState/actions'

import LegendScopeToggle from './LegendScopeToggle'

import './style.scss'

export default class MapLegend extends React.Component {
  constructor(props) {
    super(props)

    this.toggleLegend = this.toggleLegend.bind(this)
    this.getScope = this.getScope.bind(this)
  }

  toggleLegend() {
    this.props.dispatch(this.props.open ? closeLegend() : openLegend())
  }

  getScope() {
    return this.props.legendScopeBoundaries ? this.props.baseLayer : this.props.buildingBaseLayer
  }

  render() {
    return (
      <div className={classNames('map-legend', { 'open-legend': this.props.open })}>
        {this.props.open && (
          <LegendScopeToggle dispatch={this.props.dispatch} legendScopeBoundaries={this.props.legendScopeBoundaries} />
        )}
        {this.props.open && (
          <div className="legend-wrapper">
            <div className="legend-content">
              <div className="legend-scale-column">{getLegendContent(this.getScope())}</div>
            </div>
            <div className="legend-title">{getLegendTitle(this.getScope())}</div>
          </div>
        )}
        <div
          className={classNames(
            'legend-button',
            this.props.open ? ['highlight-button-bottom', 'legend-open'] : ['highlight-button-left', 'legend-close']
          )}
          onClick={this.toggleLegend}
        >
          {!this.props.open && <RightArrow className="svg-flip" />}
          {this.props.open && <CloseIcon />}
        </div>
      </div>
    )
  }
}

MapLegend.propTypes = {
  baseLayer: PropTypes.string,
  buildingsPresent: PropTypes.bool,
  buildingBaseLayer: PropTypes.string,
  dispatch: PropTypes.func,
  legendScopeBoundaries: PropTypes.bool,
  open: PropTypes.bool
}
