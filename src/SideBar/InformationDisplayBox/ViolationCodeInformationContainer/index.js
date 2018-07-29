import React from 'react'
import PropTypes from 'prop-types'
import { separateViolations } from '../utils/informationDisplayBoxUtils'

const ViolationCodeInformationContainer = props => {
  return (
    <div className="violation-code-information-container">
      {separateViolations(props.code).map(code => {
        return <div className="content-box">{code}</div>
      })}
    </div>
  )
}

ViolationCodeInformationContainer.propTypes = {
  code: PropTypes.string
}

export default ViolationCodeInformationContainer
