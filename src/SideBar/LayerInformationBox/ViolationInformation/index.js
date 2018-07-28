import React from 'react'
import PropTypes from 'prop-types'

import '../SharedStyles/style.scss'
import IconRow from '../../SharedComponents/IconRow'

import { convertDepartmentToName, convertTimestampToData } from '../utils/informationUtils.js'

import {
  BuildingClassIcon,
  ViolationIcon,
  ServiceCallIcon,
  ServiceCallOpenIcon,
  TimeToResolveCallsIcon
} from '../../../SharedStyles/icons'

const ViolationInformation = props => {
  return (
    <div className="violation-information">
      <div className="info-section">
        <IconRow icon={ViolationIcon}>
          <div>{convertTimestampToData(props.selectedObject.date)}</div>
        </IconRow>
        <div className="row-box text-well">
          <div>{props.selectedObject.description}</div>
        </div>
        <IconRow icon={ViolationIcon}>
          From the <span>{convertDepartmentToName(props.selectedObject.source)}</span>
        </IconRow>
        {!!props.selectedObject.penalty && (
          <IconRow icon={ViolationIcon}>
            A penalty of <span>{props.selectedObject.penalty}</span> was imposed.
          </IconRow>
        )}
        <IconRow icon={ViolationIcon}>
          Code: <span>{props.selectedObject.code}</span>
          <div>More information about this violation type.</div>
        </IconRow>
      </div>
    </div>
  )
}

ViolationInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default ViolationInformation
