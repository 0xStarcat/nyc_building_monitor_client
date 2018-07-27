import React from 'react'
import PropTypes from 'prop-types'
import SwitchLayerButton from '../SharedComponents/SwitchLayerButton'
import ButtonRow from '../SharedComponents/ButtonRow'
import IconProfile from '../SharedComponents/IconProfile'
import IconHeader from '../SharedComponents/IconHeader'

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

import {
  NeighborhoodIcon,
  CensusTractIcon,
  IncomeIcon,
  RentIcon,
  RentChangeIcon,
  PopulationIcon,
  ServiceCallOpenIcon,
  RegionIcon,
  BoundaryLayersIcon
} from '../../SharedStyles/icons'

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
        <div className="menu-section">
          <IconHeader icon={RegionIcon}>Regions</IconHeader>
          <ButtonRow>
            <SwitchLayerButton
              action={this.switchScopeWithFetch}
              className="round hover-shadow"
              dispatch={this.props.dispatch}
              layer={SCOPE_NEIGHBORHOODS}
            >
              <IconProfile className="button-row-child" icon={NeighborhoodIcon} label="Neighborhoods" />
            </SwitchLayerButton>
            <SwitchLayerButton
              action={this.switchScopeWithFetch}
              className="round hover-shadow"
              dispatch={this.props.dispatch}
              layer={SCOPE_CENSUS_TRACTS}
            >
              <IconProfile className="button-row-child" icon={CensusTractIcon} label="Census Tracts" />
            </SwitchLayerButton>
          </ButtonRow>
        </div>
        <div className="thin-horizontal-row" />
        <div className="menu-section">
          <IconHeader icon={BoundaryLayersIcon}>Layers</IconHeader>
          <ButtonRow>
            <SwitchLayerButton
              action={this.switchLayer}
              className="round hover-shadow"
              dispatch={this.props.dispatch}
              layer={BASE_LAYER_MEDIAN_INCOME}
            >
              <IconProfile className="button-row-child" icon={IncomeIcon} label="Income" />
            </SwitchLayerButton>
            <SwitchLayerButton
              action={this.switchLayer}
              className="round hover-shadow"
              dispatch={this.props.dispatch}
              layer={BASE_LAYER_MEDIAN_RENT}
            >
              <IconProfile className="button-row-child" icon={RentIcon} label="Rent" />
            </SwitchLayerButton>
            <SwitchLayerButton
              action={this.switchLayer}
              className="round hover-shadow"
              dispatch={this.props.dispatch}
              layer={BASE_LAYER_MEDIAN_RENT_CHANGE}
            >
              <IconProfile className="button-row-child" icon={RentChangeIcon} label="Rent Change" />
            </SwitchLayerButton>
            <SwitchLayerButton
              action={this.switchLayer}
              className="round hover-shadow"
              dispatch={this.props.dispatch}
              layer={BASE_LAYER_WHITE_POPULATION}
            >
              <IconProfile className="button-row-child" icon={PopulationIcon} label="Race" />
            </SwitchLayerButton>
            <SwitchLayerButton
              action={this.switchLayer}
              className="round hover-shadow"
              dispatch={this.props.dispatch}
              layer={BASE_LAYER_OPEN_311}
            >
              <IconProfile className="button-row-child" icon={ServiceCallOpenIcon} label="Open 311 Calls" />
            </SwitchLayerButton>
          </ButtonRow>
        </div>
      </div>
    )
  }
}

SidebarLayerMenu.propTypes = {
  dispatch: PropTypes.func
}
