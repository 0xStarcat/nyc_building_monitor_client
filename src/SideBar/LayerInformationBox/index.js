import React from 'react'
import PropTypes from 'prop-types'

import BoundaryInformation from '../BoundaryInformation'
import BuildingInformation from '../BuildingInformation'

import LayerInformationHeader from '../LayerInformationHeader'
import { SIDEBAR_BOUNDARY_INFO, SIDEBAR_BUILDING_INFO } from '../../Store/AppState/actions'
import { readBuildingsByCensusTract } from '../../Store/Buildings/actions'
import './style.scss'

class LayerInformationBox extends React.Component {
  constructor(props) {
    super(props)

    this.onExploreClick = this.onExploreClick.bind(this)
    this.displayInformationBox = this.displayInformationBox.bind(this)
  }

  onExploreClick(event) {
    this.props.dispatch(readBuildingsByCensusTract(this.props.selectedLayer.id))
  }

  displayInformationBox() {
    switch (this.props.sidebarMode) {
      case SIDEBAR_BOUNDARY_INFO:
        return <BoundaryInformation selectedLayer={this.props.selectedLayer} />

      case SIDEBAR_BUILDING_INFO:
        return <BuildingInformation selectedLayer={this.props.selectedLayer} />
    }
  }

  render() {
    if (!this.props.selectedLayer) return null
    return (
      <div className="layerInformationBox">
        <LayerInformationHeader selectedLayer={this.props.selectedLayer} />
        <button className="sidebar-button" onClick={this.onExploreClick}>
          Explore
        </button>
        {this.displayInformationBox()}
      </div>
    )
  }
}

LayerInformationBox.propTypes = {
  selectedLayer: PropTypes.object,
  sidebarMode: PropTypes.string
}
export default LayerInformationBox
