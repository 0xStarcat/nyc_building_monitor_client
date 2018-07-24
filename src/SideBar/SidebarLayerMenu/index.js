import React from 'react'
import PropTypes from 'prop-types'
import LayerMenuButton from './LayerMenuButton'

import {
  changeBaseLayer,
  switchScope,
  SIDEBAR_SCOPE_NEIGHBORHOODS,
  SIDEBAR_SCOPE_CENSUS_TRACTS,
  BASE_LAYER_CT_MEDIAN_INCOME,
  BASE_LAYER_CT_MEDIAN_RENT,
  BASE_LAYER_CT_MEDIAN_RENT_CHANGE,
  BASE_LAYER_CT_WHITE_POPULATION,
  BASE_LAYER_CT_OPEN_311
} from '../../Store/AppState/actions'

export default class SidebarLayerMenu extends React.Component {
  constructor(props) {
    super(props)

    this.switchLayer = this.switchLayer.bind(this)
    this.switchScope = this.switchScope.bind(this)
  }

  switchScope(scope) {
    this.props.dispatch(switchScope(scope))
  }

  switchLayer(layer) {
    this.props.dispatch(changeBaseLayer(layer))
  }

  render() {
    return (
      <div className="sidebar-layer-menu">
        <LayerMenuButton
          action={this.switchScope}
          buttonText="Neighborhoods"
          dispatch={this.props.dispatch}
          layer={SIDEBAR_SCOPE_NEIGHBORHOODS}
        />
        <LayerMenuButton
          action={this.switchScope}
          buttonText="Census Tracts"
          dispatch={this.props.dispatch}
          layer={SIDEBAR_SCOPE_CENSUS_TRACTS}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Median Income, 2017"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_CT_MEDIAN_INCOME}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Median Rent, 2017"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_CT_MEDIAN_RENT}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Rent Change, 2011 - 2017"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_CT_MEDIAN_RENT_CHANGE}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="% White 2010"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_CT_WHITE_POPULATION}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Percent Service Calls Open 1 Month"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_CT_OPEN_311}
        />
      </div>
    )
  }
}

SidebarLayerMenu.propTypes = {
  switchLayer: PropTypes.func
}
