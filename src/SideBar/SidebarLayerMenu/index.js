import React from 'react'
import PropTypes from 'prop-types'
import SwitchLayerButton from '../SharedComponents/SwitchLayerButton'
import ButtonRow from '../SharedComponents/ButtonRow'
import IconButton from '../SharedComponents/IconButton'

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

import { NeighborhoodIcon, CensusTractIcon } from '../../SharedStyles/icons'

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
      <div className="sidebar-layer-menu content-box">
        <ButtonRow>
          <SwitchLayerButton
            action={this.switchScopeWithFetch}
            dispatch={this.props.dispatch}
            layer={SCOPE_NEIGHBORHOODS}
          >
            <IconButton className="button-row-child" icon={NeighborhoodIcon} label="Neighborhoods" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchScopeWithFetch}
            dispatch={this.props.dispatch}
            layer={SCOPE_CENSUS_TRACTS}
          >
            <IconButton className="button-row-child" icon={CensusTractIcon} label="Census Tracts" />
          </SwitchLayerButton>
        </ButtonRow>
        <SwitchLayerButton
          action={this.switchLayer}
          buttonText="Median Income, 2017"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_MEDIAN_INCOME}
        />
        <SwitchLayerButton
          action={this.switchLayer}
          buttonText="Median Rent, 2017"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_MEDIAN_RENT}
        />
        <SwitchLayerButton
          action={this.switchLayer}
          buttonText="Rent Change, 2011 - 2017"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_MEDIAN_RENT_CHANGE}
        />
        <SwitchLayerButton
          action={this.switchLayer}
          buttonText="% White 2010"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_WHITE_POPULATION}
        />
        <SwitchLayerButton
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
