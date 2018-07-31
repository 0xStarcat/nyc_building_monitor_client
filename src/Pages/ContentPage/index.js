import React from 'react'
import PropTypes from 'prop-types'
import ContentSidebar from './ContentSidebar'

const ContentPage = props => {
  return (
    <div className="content-page">
      <ContentSidebar landscapeOrientation={props.landscapeOrientation} router={props.router} />
      {props.children}
    </div>
  )
}

ContentPage.propTypes = {
  router: PropTypes.object
}

export default ContentPage
