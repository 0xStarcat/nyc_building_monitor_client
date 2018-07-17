import React from 'react'
import { connect } from 'react-redux'
import LeafletMap from '../../LeafletMap'
import SideBar from '../../SideBar'
import Layout from '../Layout'

const MapPage = props => {
  return (
    <Layout>
      <LeafletMap store={props.store} mapRef={props.mapRef} />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(MapPage)
