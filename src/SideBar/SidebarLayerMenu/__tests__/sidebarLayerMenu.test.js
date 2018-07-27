import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import SidebarLayerMenu from '../index.js'

configure({ adapter: new Adapter() })

describe('SidebarLayerMenu', () => {
  const dispatch = sinon.spy()
  const wrapper = shallow(<SidebarLayerMenu dispatch={dispatch} />)
  it('renders the component', () => {
    expect(wrapper.find('.sidebar-layer-menu').length).toEqual(1)
  })

  describe('#switchLayer', () => {
    const dispatch = sinon.spy()
    const wrapper = shallow(<SidebarLayerMenu dispatch={dispatch} />)
    it('calls dispatch once', () => {
      wrapper.instance().switchLayer('layer')
      expect(dispatch.calledOnce).toEqual(true)
    })
  })

  describe('#switchScopeWithFetch', () => {
    const dispatch = sinon.spy()
    const wrapper = shallow(<SidebarLayerMenu dispatch={dispatch} />)
    it('calls dispatch twice', () => {
      wrapper.instance().switchScopeWithFetch('scope')
      expect(dispatch.calledTwice).toEqual(true)
    })
  })
})
