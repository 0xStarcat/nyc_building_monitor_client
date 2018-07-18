import React from 'react'
import { connect } from 'react-redux'
import SideBar from '../../SideBar'

import './style.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="pageLayout">
        <SideBar dispatch={this.props.dispatch} store={this.props.store} />
        <div id="mainContent">{this.props.children}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    store: state
  }
}
export default connect(mapStateToProps)(Layout)
