import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const DispatchActionButton = props => {
  const converArgs = args => {
    if (!args) return
    return typeof props.actionArguments === 'object' ? { ...props.actionArguments } : props.actionArguments
  }
  const onClick = () => {
    if (props.disabled) return null
    props.dispatch(props.action(converArgs(props.actionArguments)))
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
