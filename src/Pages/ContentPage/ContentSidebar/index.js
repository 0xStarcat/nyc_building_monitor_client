import React from 'react'
import PropTypes from 'prop-types'

import LinkMenu from '../../../SharedComponents/LinkMenu'

import './style.scss'

class ContentSidebar extends React.Component {
  constructor() {
    super()

    this.state = {
      active: false
    }

    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const sidebarTransform = this.state.active ? { transform: 'translateX(0px)' } : { transform: 'translateX(-110vw)' }
    const buttonTransform = this.state.active
      ? { transform: 'translateX(calc(100vw - 60px)) translateY(25px)' }
      : { transform: 'translateX(112vw) translateY(20px)' }

    return (
      <div className="content-sidebar" style={sidebarTransform}>
        <div className="button round content-sidebar-button" onClick={this.toggleActive} style={buttonTransform}>
          {this.state.active ? 'X' : '?'}
        </div>
        <LinkMenu router={this.props.router} />
      </div>
    )
  }
}

ContentSidebar.propTypes = {
  router: PropTypes.object
}

export default ContentSidebar
