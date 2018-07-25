import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import MobileTopButtons from '../index.js'

import ControlHideButton from '../../ControlHideButton'
import ControlExpandButton from '../../ControlExpandButton'
import ControlPreviewButton from '../../ControlPreviewButton'

import { SIDEBAR_STATE_INACTIVE, SIDEBAR_STATE_PREVIEW, SIDEBAR_STATE_ACTIVE } from '../../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

describe('MobileTopButtons', () => {
  const appState = {
    sidebarState: SIDEBAR_STATE_INACTIVE
  }
  const wrapper = shallow(<MobileTopButtons appState={appState} />)

  it('renders the component', () => {
    expect(wrapper.find('.mobile-buttons').length).toEqual(1)
  })

  describe('when SIDEBAR_STATE_INACTIVE', () => {
    const wrapper = shallow(<MobileTopButtons appState={appState} />)
    it('renders ControlHideButton', () => {
      expect(wrapper.children().find(ControlHideButton).length).toEqual(1)
    })
  })

  describe('when SIDEBAR_STATE_PREVIEW', () => {
    const wrapper = shallow(<MobileTopButtons appState={{ ...appState, sidebarState: SIDEBAR_STATE_PREVIEW }} />)
    it('renders ControlHideButton and ControlExpandButton', () => {
      expect(wrapper.children().find(ControlHideButton).length).toEqual(1)
      expect(wrapper.children().find(ControlExpandButton).length).toEqual(1)
    })
  })

  describe('when SIDEBAR_STATE_ACTIVE', () => {
    const wrapper = shallow(<MobileTopButtons appState={{ ...appState, sidebarState: SIDEBAR_STATE_ACTIVE }} />)

    it('renders ControlHideButton and ControlPreviewButton', () => {
      expect(wrapper.children().find(ControlHideButton).length).toEqual(1)
      expect(wrapper.children().find(ControlPreviewButton).length).toEqual(1)
    })
  })
})
