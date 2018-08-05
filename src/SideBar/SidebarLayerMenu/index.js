import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconHeader from '../SharedComponents/IconHeader'

import SidebarBoundaryScopeButtons from '../SidebarBoundaryScopeButtons'
import SidebarBoundaryDetailButtons from '../SidebarBoundaryDetailButtons'
import SidebarBuildingDetailButtons from '../SidebarBuildingDetailButtons'

import { BuildingExploreIcon, RegionIcon, BoundaryLayersIcon } from '../../SharedStyles/icons'

export default class SidebarLayerMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className={classNames('sidebar-layer-menu', 'sidebar-wrapper', {
          'headerless-scroll-container': this.props.landscapeOrientation
        })}
      >
        <div
          className={classNames(
            { 'menu-section': this.props.landscapeOrientation },
            { 'condensed-menu-section': !this.props.landscapeOrientation }
          )}
        >
          {this.props.landscapeOrientation && <IconHeader icon={RegionIcon}>Region Levels</IconHeader>}
          <SidebarBoundaryScopeButtons dispatch={this.props.dispatch} sidebarScope={this.props.sidebarScope} />
        </div>
        <div
          className={classNames(
            { 'menu-section': this.props.landscapeOrientation },
            { 'condensed-menu-section': !this.props.landscapeOrientation }
          )}
        >
          {this.props.landscapeOrientation && <IconHeader icon={BoundaryLayersIcon}>Region Details</IconHeader>}
          <SidebarBoundaryDetailButtons dispatch={this.props.dispatch} baseLayer={this.props.baseLayer} />
        </div>
        {this.props.buildingsPresent && (
          <div
            className={classNames(
              { 'menu-section': this.props.landscapeOrientation },
              { 'condensed-menu-section': !this.props.landscapeOrientation }
            )}
          >
            {this.props.landscapeOrientation && <IconHeader icon={BuildingExploreIcon}>Building Details</IconHeader>}
            <SidebarBuildingDetailButtons
              dispatch={this.props.dispatch}
              buildingBaseLayer={this.props.buildingBaseLayer}
            />
          </div>
        )}
      </div>
    )
  }
}

SidebarLayerMenu.propTypes = {
  dispatch: PropTypes.func,
  baseLayer: PropTypes.string,
  buildingBaseLayer: PropTypes.string,
  buildingsPresent: PropTypes.bool,
  landscapeOrientation: PropTypes.bool
}
