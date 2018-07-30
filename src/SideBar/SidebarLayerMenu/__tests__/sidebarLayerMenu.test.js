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
})
