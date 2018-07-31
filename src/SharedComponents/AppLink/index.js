import React from 'react'
import classNames from 'classnames'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import './style.scss'

const AppLink = props => {
  return (
    <Link className={classNames('app-link', props.className, { 'active-link': props.active })} to={props.href}>
      {React.Children.map(props.children, child => {
        if (typeof child === 'object')
          return React.cloneElement(child, { active: props.active, disabled: props.disabled })
        else return child
      })}
    </Link>
  )
}

AppLink.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string
}

export default AppLink
