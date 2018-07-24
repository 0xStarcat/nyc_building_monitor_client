import React from 'react'
import PropTypes from 'prop-types'
import LayerMenuButton from './LayerMenuButton'

import {
  changeBaseLayer,
  switchScopeWithFetch,
  changeBaseLayerScope,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  BASE_LAYER_MEDIAN_INCOME,
  BASE_LAYER_MEDIAN_RENT,
  BASE_LAYER_MEDIAN_RENT_CHANGE,
  BASE_LAYER_WHITE_POPULATION,
  BASE_LAYER_OPEN_311
} from '../../Store/AppState/actions'

export default class SidebarLayerMenu extends React.Component {
  constructor(props) {
    super(props)

    this.switchLayer = this.switchLayer.bind(this)
    this.switchScopeWithFetch = this.switchScopeWithFetch.bind(this)
  }

  switchScopeWithFetch(scope) {
    this.props.dispatch(changeBaseLayerScope(scope))
    this.props.dispatch(switchScopeWithFetch(scope))
  }

  switchLayer(layer) {
    this.props.dispatch(changeBaseLayer(layer))
  }

  render() {
    return (
      <div className="sidebar-layer-menu">
        <LayerMenuButton
          action={this.switchScopeWithFetch}
          buttonText="Neighborhoods"
          dispatch={this.props.dispatch}
          layer={SCOPE_NEIGHBORHOODS}
        />
        <LayerMenuButton
          action={this.switchScopeWithFetch}
          buttonText="Census Tracts"
          dispatch={this.props.dispatch}
          layer={SCOPE_CENSUS_TRACTS}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Median Income, 2017"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_MEDIAN_INCOME}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Median Rent, 2017"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_MEDIAN_RENT}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Rent Change, 2011 - 2017"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_MEDIAN_RENT_CHANGE}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="% White 2010"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_WHITE_POPULATION}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Percent Service Calls Open 1 Month"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_OPEN_311}
        />
      </div>
    )
  }
}

SidebarLayerMenu.propTypes = {
  switchLayer: PropTypes.func
}
