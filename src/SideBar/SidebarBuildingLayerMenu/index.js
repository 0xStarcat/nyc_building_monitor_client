import React from 'react'
import PropTypes from 'prop-types'
import SwitchLayerButton from '../SharedComponents/SwitchLayerButton'
import IconProfile from '../SharedComponents/IconProfile'
import ButtonRow from '../SharedComponents/ButtonRow'

import {
  changeBuildingBaseLayer,
  BASE_LAYER_BUILDING_CATEGORIES,
  BASE_LAYER_TOTAL_VIOLATIONS,
  BASE_LAYER_TOTAL_BUILDING_OPEN_311
} from '../../Store/AppState/actions'

import { BuildingIcon, ViolationIcon, ServiceCallIcon } from '../../SharedStyles/icons'

export default class SidebarBuildingLayerMenu extends React.Component {
  constructor(props) {
    super(props)

    this.switchLayer = this.switchLayer.bind(this)
  }

  switchLayer(layer) {
    this.props.dispatch(changeBuildingBaseLayer(layer))
  }

  render() {
    return (
      <div className="sidebar-building-layer-menu">
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

SidebarBuildingLayerMenu.propTypes = {
  dispatch: PropTypes.func,
  landscapeOrientation: PropTypes.bool,
  switchLayer: PropTypes.func
}
