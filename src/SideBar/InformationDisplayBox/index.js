import React from 'react'
import PropTypes from 'prop-types'
import { separateViolations } from './utils/informationDisplayBoxUtils'

const InformationDisplayBox = props => {
  return (
    <div className="information-display-box">
      {separateViolations(props.informationContentCode).map(code => {
        {
          code
        }
      })}
    </div>
  )
}

InformationDisplayBox.propTypes = {
  informationContentCode: PropTypes.string
}

export default InformationDisplayBox
