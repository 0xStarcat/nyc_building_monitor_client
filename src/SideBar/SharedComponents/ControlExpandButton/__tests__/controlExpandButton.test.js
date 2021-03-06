import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import ControlExpandButton from '../index.js'
import {
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_VIEW_SELECTED_OBJECT,
  SIDEBAR_VIEW_SCOPED_OBJECTS
} from '../../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

describe('ControlExpandButton', () => {
  const props = {
    sidebarScope: SIDEBAR_VIEW_SELECTED_OBJECT,
    sidebarState: SIDEBAR_STATE_PREVIEW
  }
  const wrapper = shallow(<ControlExpandButton {...props} />)

  it('renders the component', () => {
    expect(wrapper.find('.control-expand-button').length).toEqual(1)
  })

  describe('when sidebarState != SIDEBAR_STATE_PREVIEW', () => {
    it('renders but hides the component', () => {
      const props = {
        sidebarScope: SIDEBAR_VIEW_SELECTED_OBJECT,
        sidebarState: SIDEBAR_STATE_ACTIVE
      }
      const wrapper = shallow(<ControlExpandButton {...props} />)
      expect(wrapper.find('.control-expand-button').length).toEqual(1)
      expect(wrapper.find('.hidden-svg').length).toEqual(1)
    })
  })
})
