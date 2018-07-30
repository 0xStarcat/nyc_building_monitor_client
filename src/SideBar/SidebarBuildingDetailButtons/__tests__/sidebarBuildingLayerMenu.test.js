import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import SidebarBuildingDetailButtons from '../index.js'

configure({ adapter: new Adapter() })

describe('SidebarBuildingDetailButtons', () => {
  const dispatch = sinon.spy()
  const wrapper = shallow(<SidebarBuildingDetailButtons dispatch={dispatch} />)

  it('renders the component', () => {
    expect(wrapper.find('.sidebar-building-detail-buttons').length).toEqual(1)
  })

  describe('#switchLayer', () => {
    it('calls dispatch thrice', () => {
      wrapper.instance().switchLayer()
      expect(dispatch.calledThrice).toEqual(true)
    })
  })
})
