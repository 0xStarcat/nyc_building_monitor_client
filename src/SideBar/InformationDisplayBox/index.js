import React from 'react'
import PropTypes from 'prop-types'
import { getInformationContent } from './utils/informationDisplayBoxUtils'

const InformationDisplayBox = props => {
  return (
    <div className="information-display-box">
      <div className="content-box">{getInformationContent(props.informationContentCode)}</div>
    </div>
  )
}

InformationDisplayBox.propTypes = {
  informationContentCode: PropTypes.string
}

export default InformationDisplayBox
