import React from 'react'
import PropTypes from 'prop-types'
import LayerMenuButton from '../SharedComponents/LayerMenuButton'

import {
  changeBuildingBaseLayer,
  BASE_LAYER_BUILDING_CATEGORIES,
  BASE_LAYER_TOTAL_OPEN_VIOLATIONS,
  BASE_LAYER_TOTAL_BUILDING_OPEN_311
} from '../../Store/AppState/actions'

export default class SidebarLayerMenu extends React.Component {
  constructor(props) {
    super(props)

    this.switchLayer = this.switchLayer.bind(this)
  }

  switchLayer(layer) {
    this.props.dispatch(changeBuildingBaseLayer(layer))
  }

  render() {
    return (
      <div className="sidebar-layer-menu">
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Building Categories"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_BUILDING_CATEGORIES}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Total Violations"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_TOTAL_OPEN_VIOLATIONS}
        />
        <LayerMenuButton
          action={this.switchLayer}
          buttonText="Total Open 311 Calls ( > 1 Month)"
          dispatch={this.props.dispatch}
          layer={BASE_LAYER_TOTAL_BUILDING_OPEN_311}
        />
      </div>
    )
  }
}

SidebarLayerMenu.propTypes = {
  dispatch: PropTypes.dispatch,
  switchLayer: PropTypes.func
}
