import React from 'react'
import PropTypes from 'prop-types'

const ContentPage = props => {
  return <div className="content-page">{props.children}</div>
}

ContentPage.propTypes = {}

export default ContentPage
