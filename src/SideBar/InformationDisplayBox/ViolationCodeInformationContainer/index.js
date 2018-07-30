import React from 'react'
import PropTypes from 'prop-types'
import { separateViolations } from '../utils/informationDisplayBoxUtils'
import { getViolationCodeInformation } from './utils/violationCodeInformationContainerUtils'

const ViolationCodeInformationContainer = props => {
  return (
    <article className="violation-code-information-container">
      {separateViolations(props.code).map((code, index) => {
        return getViolationCodeInformation(code.split('violationCode-')[1], index)
      })}
    </article>
  )
}

ViolationCodeInformationContainer.propTypes = {
  code: PropTypes.string
}

export default ViolationCodeInformationContainer
