import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const DispatchActionButton = props => {
  const onClick = () => {
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
  className: PropTypes.string
}

export default connect()(DispatchActionButton)
