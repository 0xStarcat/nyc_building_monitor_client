import React from 'react'
import PropTypes from 'prop-types'

import LayerInformationHeader from './LayerInformationHeader'
import BoundaryInformation from './BoundaryInformation'
import BuildingInformation from './BuildingInformation'
import ViolationsTable from './ViolationsTable'
import ServiceCallInformation from './ServiceCallInformation'
import SaleInformation from './SaleInformation'

import {
  SIDEBAR_SCOPE_CENSUS_TRACTS,
  SIDEBAR_SCOPE_BUILDINGS,
  SIDEBAR_SCOPE_VIOLATIONS,
  SIDEBAR_SCOPE_SERVICE_CALLS
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
    this.props.dispatch(readBuildingsByCensusTract(this.props.selectedObject.id))
  }

  displayInformationBox() {
    switch (this.props.sidebarScope) {
      case SIDEBAR_SCOPE_CENSUS_TRACTS:
        return <BoundaryInformation selectedObject={this.props.selectedObject} />
      case SIDEBAR_SCOPE_BUILDINGS:
        return <BuildingInformation selectedObject={this.props.selectedObject} />
      case SIDEBAR_SCOPE_VIOLATIONS:
        return <ViolationsTable features={this.props.features} />
      case SIDEBAR_SCOPE_SERVICE_CALLS:
        return <ServiceCallInformation selectedObject={this.props.selectedObject} />
    }
  }

  render() {
    return (
      <div className="layerInformationBox">
        <LayerInformationHeader selectedObject={this.props.selectedObject} sidebarScope={this.props.sidebarScope} />
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
  sidebarScope: PropTypes.string
}
export default LayerInformationBox
