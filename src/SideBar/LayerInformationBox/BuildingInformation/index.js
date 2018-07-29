import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewFetchButton from '../../SharedComponents/SwitchViewFetchButton'
import IconRow from '../../SharedComponents/IconRow'
import ActionCard from '../../SharedComponents/ActionCard'
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
import { RightArrow, ViolationIcon } from '../../../SharedStyles/icons'

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
    <div className={`boundary-information ${props.sidebarState !== SIDEBAR_STATE_PREVIEW ? 'scroll-box' : ''}`}>
      {props.sidebarState === SIDEBAR_STATE_PREVIEW && <div className="preview-section">{getPreviewRow(props)}</div>}
      <div className="info-title">
        <h5>2010 - Present</h5>
      </div>
      <BuildingClassRow className="card info-card" value={props.selectedObject.buildingClass} />
      <SwitchViewFetchButton
        action={getViolations}
        viewSwitch={SIDEBAR_VIEW_SCOPED_OBJECTS}
        scopeSwitch={SCOPE_VIOLATIONS}
      >
        <ActionCard>
          <ViolationRow value={props.selectedObject.violationsTotal} />
        </ActionCard>
      </SwitchViewFetchButton>
      <SwitchViewFetchButton
        action={getServiceCalls}
        viewSwitch={SIDEBAR_VIEW_SCOPED_OBJECTS}
        scopeSwitch={SCOPE_SERVICE_CALLS}
      >
        <ActionCard>
          <ServiceCallRow value={props.selectedObject.serviceCallsTotal} />
        </ActionCard>
      </SwitchViewFetchButton>
      {!!props.selectedObject.serviceCallsTotal && (
        <TimeToResolveCallsRow
          className="card info-card"
          value={props.selectedObject.averageDaysToResolveServiceCalls}
        />
      )}
      {!!props.selectedObject.serviceCallsTotal && (
        <ServiceCallsOpenRow className="card info-card" value={props.selectedObject.serviceCallsPercentOpenOneMonth} />
      )}
      <IconRow className="card info-card" icon={ViolationIcon}>
        <a
          href={`http://a810-bisweb.nyc.gov/bisweb/PropertyProfileOverviewServlet?boro=${
            props.selectedObject.boroCode
          }&block=${props.selectedObject.block}&lot=${props.selectedObject.lot}`}
          target="_blank"
        >
          You can view this building's BIS documents here.
        </a>
      </IconRow>
    </div>
  )
}

BuildingInformation.propTypes = {
  buildingBaseLayer: PropTypes.string,
  selectedObject: PropTypes.object,
  sidebarState: PropTypes.string
}

export default BuildingInformation
