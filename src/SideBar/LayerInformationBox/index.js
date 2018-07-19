import React from 'react'
import PropTypes from 'prop-types'

import LayerInformationHeader from './LayerInformationHeader'
import BoundaryInformation from './BoundaryInformation'
import BuildingInformation from './BuildingInformation'
import ViolationsTable from './ViolationsTable'
import ServiceCallInformation from './ServiceCallInformation'
import SaleInformation from './SaleInformation'

import {
  SIDEBAR_CENSUS_TRACT_INFO,
  SIDEBAR_BUILDING_INFO,
  SIDEBAR_VIOLATION_INFO,
  SIDEBAR_SERVICE_CALL_INFO,
  SIDEBAR_SALE_INFO
} from '../../Store/AppState/actions'
import { readBuildingsByCensusTract } from '../../Store/Buildings/actions'
import './style.scss'

class LayerInformationBox extends React.Component {
  constructor(props) {
    super(props)

    this.onExploreClick = this.onExploreClick.bind(this)
    this.displayInformationBox = this.displayInformationBox.bind(this)
  }

  onExploreClick(event) {
    this.props.dispatch(readBuildingsByCensusTract(this.props.selectedObject.id.value))
  }

  displayInformationBox() {
    switch (this.props.sidebarMode) {
      case SIDEBAR_CENSUS_TRACT_INFO:
        return <BoundaryInformation selectedObject={this.props.selectedObject} />
      case SIDEBAR_BUILDING_INFO:
        return <BuildingInformation selectedObject={this.props.selectedObject} />
      case SIDEBAR_VIOLATION_INFO:
        return <ViolationsTable features={this.props.features} />
      case SIDEBAR_SERVICE_CALL_INFO:
        return <ServiceCallInformation selectedObject={this.props.selectedObject} />
      case SIDEBAR_SALE_INFO:
        return <SaleInformation selectedObject={this.props.selectedObject} />
    }
  }

  render() {
    return (
      <div className="layerInformationBox">
        <LayerInformationHeader selectedObject={this.props.selectedObject} sidebarMode={this.props.sidebarMode} />
        <button className="sidebar-button" onClick={this.onExploreClick}>
          Explore
        </button>
        <div className="information-box">{this.displayInformationBox()}</div>
      </div>
    )
  }
}

LayerInformationBox.propTypes = {
  selectedObject: PropTypes.object,
  sidebarMode: PropTypes.string
}
export default LayerInformationBox
