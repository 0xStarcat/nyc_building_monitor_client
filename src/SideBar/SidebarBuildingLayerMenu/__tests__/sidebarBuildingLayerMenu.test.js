import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import SidebarBuildingLayerMenu from '../index.js'

configure({ adapter: new Adapter() })

describe('SidebarBuildingLayerMenu', () => {
  const dispatch = sinon.spy()
  const wrapper = shallow(<SidebarBuildingLayerMenu dispatch={dispatch} />)

  it('renders the component', () => {
    expect(wrapper.find('.sidebar-building-layer-menu').length).toEqual(1)
  })

  describe('#switchLayer', () => {
    it('calls dispatch once', () => {
      wrapper.instance().switchLayer()
      expect(dispatch.calledOnce).toEqual(true)
    })
  })
})
