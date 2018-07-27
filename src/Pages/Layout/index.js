import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="pageLayout">
        <div id="mainContent">{this.props.children}</div>
      </div>
    )
  }
}

Layout.propTypes = {
  store: PropTypes.object
}

const mapStateToProps = state => {
  return {
    store: state
  }
}
export default connect(mapStateToProps)(Layout)
