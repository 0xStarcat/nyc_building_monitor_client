import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { SwitchViewButton } from '../index.js'

import { SIDEBAR_SCOPE_VIOLATIONS } from '../../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

describe('SwitchViewButton', () => {
  const dispatchFn = sinon.spy()
  const selectedLayer = {
    id: 1
  }

  it('should render my component', () => {
    const wrapper = shallow(<SwitchViewButton selectedLayer={selectedLayer} />)
    expect(wrapper.find('.switch-view-button').exists()).toBe(true)
  })

  describe('on click', () => {
    const wrapper = shallow(<SwitchViewButton dispatch={dispatchFn} viewSwitch={SIDEBAR_SCOPE_VIOLATIONS} />)

    wrapper.find('.switch-view-button').simulate('click')
    it('calls the dispatch method once', () => {
      expect(dispatchFn.calledOnce).toEqual(true)
    })
  })
})
