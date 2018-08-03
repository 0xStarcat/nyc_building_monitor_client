import React from 'react'
import PropTypes from 'prop-types'

const ViolationCodeInformation = props => {
  return (
    <section className="violation-code-information text-container">
      <div className="source-box">
        <label>Source:</label>
        <a href={props.source} target="_blank" className="source">
          {props.source}
        </a>
      </div>
      <div className="info-section">
        <div className="text-section-title">
          <h5>{props.title}</h5>
        </div>
        <div className="info-scroll-container info-card">{props.children}</div>
      </div>
    </section>
  )
}

ViolationCodeInformation.propTypes = {
  source: PropTypes.string,
  title: PropTypes.title
}

export default ViolationCodeInformation
