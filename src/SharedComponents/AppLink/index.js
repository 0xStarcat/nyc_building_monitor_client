import React from 'react'
import classNames from 'classnames'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const AppLink = props => {
  return (
    <Link className={classNames('app-link', props.className)} to={props.href}>
      {props.children}
    </Link>
  )
}

AppLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
}

export default AppLink
