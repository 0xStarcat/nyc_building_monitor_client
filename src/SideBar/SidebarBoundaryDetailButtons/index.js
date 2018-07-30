import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import SwitchLayerButton from '../SharedComponents/SwitchLayerButton'
import ButtonRow from '../../SharedComponents/ButtonRow'
import IconProfile from '../SharedComponents/IconProfile'

import {
  changeBaseLayer,
  setLegendScopeBoundaries,
  switchScopeWithFetch,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  BASE_LAYER_BOUNDARY_BLANK,
  BASE_LAYER_BOUNDARY_MEDIAN_INCOME,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE,
  BASE_LAYER_BOUNDARY_WHITE_POPULATION,
  BASE_LAYER_BOUNDARY_OPEN_311,
  BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311
} from '../../Store/AppState/actions'

import {
  ResponseTimeIcon,
  BlankBoundaryIcon,
  IncomeIcon,
  RentIcon,
  RentChangeIcon,
  PopulationIcon,
  ServiceCallOpenIcon
} from '../../SharedStyles/icons'

export default class SidebarBoundaryDetailButtons extends React.Component {
  constructor(props) {
    super(props)

    this.switchLayer = this.switchLayer.bind(this)
  }

  switchLayer(layer) {
    this.props.dispatch(setLegendScopeBoundaries())
    this.props.dispatch(changeBaseLayer(layer))
  }

  render() {
    return (
      <div className="sidebar-boundary-detail-buttons">
        <ButtonRow>
          <SwitchLayerButton
            action={this.switchLayer}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BOUNDARY_BLANK}
          >
            <IconProfile className="button-row-child" icon={BlankBoundaryIcon} label="Blank Layer" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchLayer}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BOUNDARY_MEDIAN_INCOME}
          >
            <IconProfile className="button-row-child" icon={IncomeIcon} label="Income" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchLayer}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BOUNDARY_MEDIAN_RENT}
          >
            <IconProfile className="button-row-child" icon={RentIcon} label="Rent" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchLayer}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE}
          >
            <IconProfile className="button-row-child" icon={RentChangeIcon} label="Rent Change" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchLayer}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BOUNDARY_WHITE_POPULATION}
          >
            <IconProfile className="button-row-child" icon={PopulationIcon} label="Race" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchLayer}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BOUNDARY_OPEN_311}
          >
            <IconProfile className="button-row-child" icon={ServiceCallOpenIcon} label="Open 311-Calls" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchLayer}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311}
          >
            <IconProfile className="button-row-child" icon={ResponseTimeIcon} label="Response time" />
          </SwitchLayerButton>
        </ButtonRow>
      </div>
    )
  }
}

SidebarBoundaryDetailButtons.propTypes = {
  dispatch: PropTypes.func,
  landscapeOrientation: PropTypes.bool
}
