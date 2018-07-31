import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { LegendInfo } from '../index.js'

configure({ adapter: new Adapter() })

describe('LegendInfo', () => {
  const dispatch = sinon.spy()
  const wrapper = shallow(<LegendInfo dispatch={dispatch} landscapeOrientation={true} legendScopeBoundaries={true} />)

  it('renders the component', () => {
    expect(wrapper.find('.legend-info').length).toEqual(1)
  })

  describe('with landscape orientation', () => {
    describe('when legendScopeBoundaries === true', () => {
      const wrapper = shallow(
        <LegendInfo dispatch={dispatch} landscapeOrientation={true} legendScopeBoundaries={true} />
      )
      expect(wrapper.text()).toEqual('Load region details from the sidebar menu.')
    })

    describe('when legendScopeBoundaries === false', () => {
      const wrapper = shallow(
        <LegendInfo dispatch={dispatch} landscapeOrientation={true} legendScopeBoundaries={false} />
      )
      expect(wrapper.text()).toEqual('Tap on a region to load its buildings.')
    })
  })

  describe('with portrait orientation', () => {
    describe('when legendScopeBoundaries === true', () => {
      const wrapper = shallow(
        <LegendInfo dispatch={dispatch} landscapeOrientation={false} legendScopeBoundaries={true} />
      )
      expect(wrapper.text()).toEqual("Tap 'Map Details' and choose a region detail")
    })

    describe('when legendScopeBoundaries === false', () => {
      const wrapper = shallow(
        <LegendInfo dispatch={dispatch} landscapeOrientation={false} legendScopeBoundaries={false} />
      )
      expect(wrapper.text()).toEqual('Tap on a region to load its buildings.')
    })
  })
})
