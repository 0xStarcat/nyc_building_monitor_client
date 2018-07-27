import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { MapPage } from '../index.js'
import Layout from '../../Layout'

configure({ adapter: new Adapter() })

describe('MapPage', () => {
  const store = {
    appState: {
      landscapeOrientation: true
    }
  }
  const wrapper = shallow(<MapPage store={store} />)

  it('renders the component', () => {
    expect(wrapper.find(Layout).length).toEqual(1)
  })

  describe('#setViewCoordinates', () => {
    pending('sets the mapRef coordinates and zoom', () => {})
  })
})
