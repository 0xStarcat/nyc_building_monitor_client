import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewFetchButton from '../../SharedComponents/SwitchViewFetchButton'
import {
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_BOUNDARY_INFO,
  SCOPE_VIOLATIONS,
  SCOPE_SERVICE_CALLS,
  BASE_LAYER_BUILDING_CATEGORIES,
  BASE_LAYER_TOTAL_VIOLATIONS,
  BASE_LAYER_TOTAL_BUILDING_OPEN_311
} from '../../../Store/AppState/actions'

import { readViolationsByBuilding } from '../../../Store/Violations/actions'
import { readServiceCallsByBuilding } from '../../../Store/ServiceCalls/actions'

import { BuildingClassRow, ViolationRow, ServiceCallRow, TimeToResolveCallsRow, ServiceCallsOpenRow } from './Rows'
import { OpenIcon } from '../../../SharedStyles/icons'

import '../SharedStyles/style.scss'
import './style.scss'

const BuildingInformation = props => {
  if (!props.selectedObject) return null

  const getViolations = () => {
    return readViolationsByBuilding(props.selectedObject.id)
  }

  const getServiceCalls = () => {
    return readServiceCallsByBuilding(props.selectedObject.id)
  }

  const getPreviewRow = props => {
    switch (props.buildingBaseLayer) {
      case BASE_LAYER_BUILDING_CATEGORIES:
        return <BuildingClassRow value={props.selectedObject.buildingClass} />
      case BASE_LAYER_TOTAL_VIOLATIONS:
        return <ViolationRow value={props.selectedObject.violationsTotal} />
      case BASE_LAYER_TOTAL_BUILDING_OPEN_311:
        return <ServiceCallRow value={props.selectedObject.serviceCallsTotal} />
    }
  }

  return (
    <div className="building-information">
      {props.sidebarState === SIDEBAR_STATE_PREVIEW && <div className="preview-section">{getPreviewRow(props)}</div>}
      <div className="information-box">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        <BuildingClassRow value={props.selectedObject.buildingClass} />
        <SwitchViewFetchButton
          action={getViolations}
          viewSwitch={SIDEBAR_VIEW_SCOPED_OBJECTS}
          scopeSwitch={SCOPE_VIOLATIONS}
        >
          <ViolationRow value={props.selectedObject.violationsTotal} />
          <div className="icon-row icon-end icon-row-text-align underlined">
            View Details
            <i>
              <OpenIcon />
            </i>
          </div>
        </SwitchViewFetchButton>
        <SwitchViewFetchButton
          action={getServiceCalls}
          viewSwitch={SIDEBAR_VIEW_SCOPED_OBJECTS}
          scopeSwitch={SCOPE_SERVICE_CALLS}
        >
          <ServiceCallRow value={props.selectedObject.serviceCallsTotal} />
          <div className="icon-row icon-end icon-row-text-align underlined">
            View Details
            <i>
              <OpenIcon />
            </i>
          </div>
        </SwitchViewFetchButton>
        {!!props.selectedObject.serviceCallsTotal && (
          <SwitchViewFetchButton>
            <TimeToResolveCallsRow value={props.selectedObject.averageDaysToResolveServiceCalls} />
            <div className="icon-row icon-end icon-row-text-align underlined">
              View Details
              <i>
                <OpenIcon />
              </i>
            </div>
          </SwitchViewFetchButton>
        )}
        {!!props.selectedObject.serviceCallsTotal && (
          <SwitchViewFetchButton>
            <ServiceCallsOpenRow value={props.selectedObject.serviceCallsPercentOpenOneMonth} />
            <div className="icon-row icon-end icon-row-text-align underlined">
              View Details
              <i>
                <OpenIcon />
              </i>
            </div>
          </SwitchViewFetchButton>
        )}
      </div>
    </div>
  )
}

BuildingInformation.propTypes = {
  buildingBaseLayer: PropTypes.string,
  selectedObject: PropTypes.object,
  sidebarState: PropTypes.string
}

export default BuildingInformation
