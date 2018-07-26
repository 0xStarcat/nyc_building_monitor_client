import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const DispatchActionButton = props => {
  const onClick = () => {
    if (props.disabled) return null
    props.dispatch(props.action())
  }
  return (
    <div className={`button ${props.className}`} onClick={onClick}>
      {props.children}
    </div>
  )
}

DispatchActionButton.propTypes = {
  action: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export default connect()(DispatchActionButton)
