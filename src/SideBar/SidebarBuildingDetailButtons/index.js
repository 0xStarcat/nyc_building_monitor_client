import React from 'react'
import PropTypes from 'prop-types'
import SwitchLayerButton from '../SharedComponents/SwitchLayerButton'
import IconProfile from '../SharedComponents/IconProfile'
import IconHeader from '../SharedComponents/IconHeader'

import ButtonRow from '../../SharedComponents/ButtonRow'

import {
  changeBuildingBaseLayer,
  BASE_LAYER_BUILDING_CATEGORIES,
  BASE_LAYER_TOTAL_VIOLATIONS,
  BASE_LAYER_TOTAL_BUILDING_OPEN_311
} from '../../Store/AppState/actions'

import { BuildingIcon, ViolationIcon, ServiceCallIcon, BuildingLayerIcon } from '../../SharedStyles/icons'

export default class SidebarBuildingDetailButtons extends React.Component {
  constructor(props) {
    super(props)

    this.switchLayer = this.switchLayer.bind(this)
  }

  switchLayer(layer) {
    this.props.dispatch(changeBuildingBaseLayer(layer))
  }

  render() {
    return (
      <div className="sidebar-building-detail-buttons">
        {this.props.landscapeOrientation && <IconHeader icon={BuildingLayerIcon}>Layers</IconHeader>}
        <ButtonRow>
          <SwitchLayerButton
            action={this.switchLayer}
            className={`${this.props.landscapeOrientation ? 'round hover-shadow' : ''}`}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_BUILDING_CATEGORIES}
          >
            <IconProfile className="button-row-child" icon={BuildingIcon} label="Building Classes" />
          </SwitchLayerButton>

          <SwitchLayerButton
            action={this.switchLayer}
            className={`${this.props.landscapeOrientation ? 'round hover-shadow' : ''}`}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_TOTAL_VIOLATIONS}
          >
            <IconProfile className="button-row-child" icon={ViolationIcon} label="Violations" />
          </SwitchLayerButton>

          <SwitchLayerButton
            action={this.switchLayer}
            className={`${this.props.landscapeOrientation ? 'round hover-shadow' : ''}`}
            dispatch={this.props.dispatch}
            layer={BASE_LAYER_TOTAL_BUILDING_OPEN_311}
          >
            <IconProfile className="button-row-child" icon={ServiceCallIcon} label="311-Calls" />
          </SwitchLayerButton>
        </ButtonRow>
      </div>
    )
  }
}

SidebarBuildingDetailButtons.propTypes = {
  dispatch: PropTypes.func,
  landscapeOrientation: PropTypes.bool,
  switchLayer: PropTypes.func
}
