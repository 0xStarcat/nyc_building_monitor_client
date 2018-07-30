import React from 'react'
import classNames from 'classnames'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

class AppLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link className={classNames('link-element', this.props.className)} to={this.props.href}>
        {this.props.children}
      </Link>
    )
  }
}

AppLink.propTypes = {
  href: PropTypes.string
}

export default AppLink
