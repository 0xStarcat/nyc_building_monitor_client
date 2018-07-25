import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import ControlToggleButton from '../index.js'

import { SIDEBAR_STATE_ACTIVE, SIDEBAR_STATE_INACTIVE } from '../../../../Store/AppState/Actions'

configure({ adapter: new Adapter() })
const dispatch = sinon.spy()
const appState = {
  sidebarState: SIDEBAR_STATE_ACTIVE,
  landscapeOrientation: true
}

describe('ControlToggleButton', () => {
  describe('when sidebarState is SIDEBAR_STATE_ACTIVE', () => {
    const wrapper = shallow(<ControlToggleButton appState={appState} />)

    it('renders the hide button and not the show button', () => {
      expect(wrapper.find('.hide-button').length).toEqual(1)
      expect(wrapper.find('.show-button').length).toEqual(0)
    })
  })

  describe('when sidebarState is SIDEBAR_STATE_INACTIVE', () => {
    const wrapper = shallow(<ControlToggleButton appState={{ ...appState, sidebarState: SIDEBAR_STATE_INACTIVE }} />)

    it('renders the show button and not the hide button', () => {
      expect(wrapper.find('.show-button').length).toEqual(1)
      expect(wrapper.find('.hide-button').length).toEqual(0)
    })
  })
})
