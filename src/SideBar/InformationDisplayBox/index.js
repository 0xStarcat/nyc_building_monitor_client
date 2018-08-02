import React from 'react'
import PropTypes from 'prop-types'
import { getInformationContent } from './utils/informationDisplayBoxUtils'

const InformationDisplayBox = props => {
  return <div className="information-display-box">{getInformationContent(props.informationContentCode)}</div>
}

InformationDisplayBox.propTypes = {
  informationContentCode: PropTypes.string
}

export default InformationDisplayBox
