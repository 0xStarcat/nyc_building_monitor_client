import React from 'react'
import PropTypes from 'prop-types'
import AppLink from '../../SharedComponents/AppLink'

import './style.scss'

const LinkMenu = () => {
  return (
    <div className="link-menu">
      <AppLink className="hover-shadow" href="/about">
        <div className="menu-section menu-link">About this</div>
      </AppLink>
      <AppLink className="hover-shadow" href="/story">
        <div className="menu-section menu-link">The story</div>
      </AppLink>
    </div>
  )
}

LinkMenu.propTypes = {
  dispatch: PropTypes.func
}

export default LinkMenu
