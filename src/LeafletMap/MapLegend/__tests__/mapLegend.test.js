import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import MapLegend from '../index.js'

configure({ adapter: new Adapter() })

describe('MapLegend', () => {
  const dispatch = sinon.spy()
  const legendScopeBoundaries = true
  const wrapper = shallow(<MapLegend dispatch={dispatch} open={false} legendScopeBoundaries={legendScopeBoundaries} />)

  it('renders the component', () => {
    expect(wrapper.find('.map-legend').length).toEqual(1)
  })
})
