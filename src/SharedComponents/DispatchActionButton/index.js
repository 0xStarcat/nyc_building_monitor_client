import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const DispatchActionButton = props => {
  const onClick = () => {
    if (props.disabled) return null
    props.dispatch(props.action(props.actionArguments ? { ...props.actionArguments } : undefined))
  }
  return (
    <div className={classNames('button', props.className)} onClick={onClick}>
      {props.children}
    </div>
  )
}

DispatchActionButton.propTypes = {
  action: PropTypes.func,
  actionArguments: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  dispatch: PropTypes.func
}

export default connect()(DispatchActionButton)
