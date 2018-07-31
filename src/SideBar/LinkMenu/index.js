import React from 'react'
import PropTypes from 'prop-types'
import AppLink from '../../SharedComponents/AppLink'
import IconRow from '../SharedComponents/IconRow'
import { AboutIcon, StoryIcon, SupportIcon } from '../../SharedStyles/icons'

import './style.scss'

const LinkMenu = () => {
  return (
    <div className="link-menu">
      <div className="menu-section">
        <AppLink className="menu-link" href="/about">
          <IconRow icon={AboutIcon}>About this project</IconRow>
        </AppLink>
        <AppLink className="menu-link" href="/story">
          <IconRow icon={StoryIcon}>The story</IconRow>
        </AppLink>
        <AppLink className="menu-link" href="/support">
          <IconRow icon={SupportIcon}>Support the work</IconRow>
        </AppLink>
      </div>
    </div>
  )
}

LinkMenu.propTypes = {
  dispatch: PropTypes.func
}

export default LinkMenu
