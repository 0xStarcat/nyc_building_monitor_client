import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import SwitchLayerButton from '../SharedComponents/SwitchLayerButton'
import IconProfile from '../SharedComponents/IconProfile'
import IconHeader from '../SharedComponents/IconHeader'

import ButtonRow from '../../SharedComponents/ButtonRow'

import {
  openLegend,
  setLegendScopeBuildings,
  changeBuildingBaseLayer,
  BASE_LAYER_BUILDING_CATEGORIES,
  BASE_LAYER_BUILDING_TOTAL_VIOLATIONS,
  BASE_LAYER_BUILDING_OPEN_311,
  BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311
} from '../../Store/AppState/actions'

import {
  BuildingIcon,
  ViolationIcon,
  BuildingLayerIcon,
  ServiceCallOpenIcon,
  ResponseTimeIcon
} from '../../SharedStyles/icons'

export default class SidebarBuildingDetailButtons extends React.Component {
  constructor(props) {
    super(props)

    this.switchLayer = this.switchLayer.bind(this)
  }

  switchLayer(layer) {
    this.props.dispatch(openLegend())
    this.props.dispatch(setLegendScopeBuildings())
    this.props.dispatch(changeBuildingBaseLayer(layer))
  }

  render() {
    return (
      <div className="sidebar-building-detail-buttons">
        {this.props.landscapeOrientation && <IconHeader icon={BuildingLayerIcon}>Layers</IconHeader>}
        <ButtonRow>
          <SwitchLayerButton
            action={this.switchLayer}
            active={this.props.buildingBaseLayer === BASE_LAYER_BUILDING_CATEGORIES}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BUILDING_CATEGORIES}
          >
            <IconProfile className="button-row-child" icon={BuildingIcon} label="Building Classes" />
          </SwitchLayerButton>

          <SwitchLayerButton
            action={this.switchLayer}
            active={this.props.buildingBaseLayer === BASE_LAYER_BUILDING_TOTAL_VIOLATIONS}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BUILDING_TOTAL_VIOLATIONS}
          >
            <IconProfile className="button-row-child" icon={ViolationIcon} label="Violations" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchLayer}
            active={this.props.buildingBaseLayer === BASE_LAYER_BUILDING_OPEN_311}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BUILDING_OPEN_311}
          >
            <IconProfile className="button-row-child" icon={ServiceCallOpenIcon} label="Open 311-Calls" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchLayer}
            active={this.props.buildingBaseLayer === BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311}
            className={classNames({ 'round hover-shadow': this.props.landscapeOrientation })}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311}
          >
            <IconProfile className="button-row-child" icon={ResponseTimeIcon} label="Response Time" />
          </SwitchLayerButton>
        </ButtonRow>
      </div>
    )
  }
}

SidebarBuildingDetailButtons.propTypes = {
  buildingBaseLayer: PropTypes.string,
  dispatch: PropTypes.func,
  landscapeOrientation: PropTypes.bool,
  switchLayer: PropTypes.func
}
