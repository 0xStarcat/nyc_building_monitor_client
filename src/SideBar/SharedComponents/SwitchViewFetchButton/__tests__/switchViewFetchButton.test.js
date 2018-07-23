import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { SwitchViewFetchButton } from '../index.js'

import { SIDEBAR_VIOLATION_INFO } from '../../../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

describe('SwitchViewFetchButton', () => {
  const dispatchFn = sinon.spy()
  const actionFn = sinon.spy()
  const selectedLayer = {
    id: 1
  }

  it('should render my component', () => {
    const wrapper = shallow(<SwitchViewFetchButton selectedLayer={selectedLayer} />)
    expect(wrapper.find('.switch-view-fetch-button').exists()).toBe(true)
  })

  describe('on click', () => {
    const wrapper = shallow(
      <SwitchViewFetchButton dispatch={dispatchFn} action={actionFn} viewSwitch={SIDEBAR_VIOLATION_INFO} />
    )

    wrapper.find('.switch-view-fetch-button').simulate('click')
    it('calls the dispatch method twice', () => {
      expect(dispatchFn.calledTwice).toEqual(true)
    })

    it('calls the action method once', () => {
      expect(actionFn.calledOnce).toEqual(true)
    })
  })
})
