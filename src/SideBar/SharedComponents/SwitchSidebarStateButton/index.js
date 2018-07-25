import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const SwitchSidebarStateButton = props => {
  const onClick = () => {
    props.dispatch(props.action())
  }
  return (
    <div className={`button ${props.className}`} onClick={onClick}>
      {props.children}
    </div>
  )
}

SwitchSidebarStateButton.propTypes = {
  action: PropTypes.func,
  className: PropTypes.string
}

export default connect()(SwitchSidebarStateButton)
