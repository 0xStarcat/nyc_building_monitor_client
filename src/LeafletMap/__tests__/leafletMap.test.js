import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import LeafletMap from '../index.js'

configure({ adapter: new Adapter() })

describe('LeafletMap', () => {
  const store = {
    appState: {
      allLayersLoaded: false
    },
    censusTracts: {
      inititalFetchCompleted: false,
      awaitingResponse: false
    },
    neighborhoods: {
      awaitingResponse: false
    },
    buildings: {
      awaitingResponse: false,
      features: []
    }
  }

  it('should render my component', () => {
    const wrapper = shallow(<LeafletMap store={store} />)
    expect(wrapper.find('#leaflet-map').exists()).toBe(true)
  })
})
