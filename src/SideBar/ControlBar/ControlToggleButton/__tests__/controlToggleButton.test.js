import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import ControlToggleButton from '../index.js'

configure({ adapter: new Adapter() })
const dispatch = sinon.spy()
const appState = {
  sidebarActive: true,
  landscapeOrientation: true
}

describe('ControlToggleButton', () => {
  describe('when sidebarActive is true', () => {
    const wrapper = shallow(<ControlToggleButton appState={appState} />)

    it('renders the hide button and not the show button', () => {
      expect(wrapper.find('.hide-button').length).toEqual(1)
      expect(wrapper.find('.show-button').length).toEqual(0)
    })
  })

  describe('when sidebarActive is false', () => {
    const wrapper = shallow(<ControlToggleButton appState={{ ...appState, sidebarActive: false }} />)

    it('renders the show button and not the hide button', () => {
      expect(wrapper.find('.show-button').length).toEqual(1)
      expect(wrapper.find('.hide-button').length).toEqual(0)
    })
  })
})
