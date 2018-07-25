import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import MobileButtonContainer from '../index.js'

import { SIDEBAR_STATE_INACTIVE, SIDEBAR_STATE_PREVIEW } from '../../Store/AppState/actions'

import {
  MOBILE_BUTTONS_INACTIVE_Y_TRANSLATION,
  MOBILE_BUTTONS_PREVIEW_Y_TRANSLATION
} from '../../SharedStyles/__constants__/sidebarConstants.js'

configure({ adapter: new Adapter() })
const appState = {
  sidebarState: SIDEBAR_STATE_INACTIVE
}
describe('MobileButtonContainer', () => {
  it('renders', () => {
    const wrapper = shallow(<MobileButtonContainer appState={appState} />)
    expect(wrapper.find('.mobile-button-container').length).toEqual(1)
  })

  describe(' when SIDEBAR_STATE_INACTIVE ', () => {
    const wrapper = shallow(<MobileButtonContainer appState={appState} />)

    it('translates Y to MOBILE_BUTTONS_INACTIVE_Y_TRANSLATION', () => {
      const props = wrapper.find('.mobile-button-container').props()
      expect(props.style).toEqual({ transform: `translateY(${MOBILE_BUTTONS_INACTIVE_Y_TRANSLATION})` })
    })
  })

  describe(' when SIDEBAR_STATE_PREVIEW', () => {
    const wrapper = shallow(<MobileButtonContainer appState={{ ...appState, sidebarState: SIDEBAR_STATE_PREVIEW }} />)

    it('translates Y to MOBILE_BUTTONS_INACTIVE_Y_TRANSLATION', () => {
      const props = wrapper.find('.mobile-button-container').props()
      expect(props.style).toEqual({ transform: `translateY(${MOBILE_BUTTONS_PREVIEW_Y_TRANSLATION})` })
    })
  })
})
