import React, { Component } from 'react'
import ScatterPlot from './ScatterPlot'
import { TooltipContext } from './context/TooltipContext'
import './style.scss'

class TooltipProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tooltip: {
        tooltipOpen: false
      }
    }

    this.showTooltip = this.showTooltip.bind(this)
    this.hideTooltip = this.hideTooltip.bind(this)
  }

  showTooltip(tooltipData) {
    this.setState({ tooltip: { ...tooltipData, tooltipOpen: true } })
  }

  hideTooltip() {
    this.setState({ tooltip: { tooltipOpen: false } })
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { showTooltip: this.showTooltip, hideTooltip: this.hideTooltip })
    )

    return <TooltipContext.Provider value={this.state.tooltip}>{childrenWithProps}</TooltipContext.Provider>
  }
}

export default TooltipProvider
