import React from 'react'
import './style.scss'

const Loading = () => {
  return (
    <div id="loading-container">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loading
