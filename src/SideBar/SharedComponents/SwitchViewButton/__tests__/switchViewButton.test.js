import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { SwitchViewButton } from '../index.js'

import { SCOPE_CENSUS_TRACTS, SIDEBAR_VIEW_BOUNDARY_LAYER_MENU } from '../../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

describe('SwitchViewButton', () => {
  const selectedLayer = {
    id: 1
  }

  it('should render my component', () => {
    const wrapper = shallow(<SwitchViewButton selectedLayer={selectedLayer} />)
    expect(wrapper.find('.switch-view-button').exists()).toBe(true)
  })

  describe('on click', () => {
    describe('when disabled', () => {
      const dispatchFn = sinon.spy()
      const wrapper = shallow(<SwitchViewButton disabled={true} dispatch={dispatchFn} />)
      wrapper.find('.switch-view-button').simulate('click')

      it('does not call the dispatch method', () => {
        expect(dispatchFn.calledTwice).toEqual(false)
      })
    })

    describe('when not disabled', () => {
      describe('if scopeSwitch prop', () => {
        const dispatchFn = sinon.spy()
        const wrapper = shallow(
          <SwitchViewButton disabled={false} dispatch={dispatchFn} scopeSwitch={SCOPE_CENSUS_TRACTS} />
        )
        wrapper.find('.switch-view-button').simulate('click')
        it('calls the dispatch method once', () => {
          expect(dispatchFn.calledOnce).toEqual(true)
        })
      })

      describe('if viewSwitch prop', () => {
        const dispatchFn = sinon.spy()
        const wrapper = shallow(
          <SwitchViewButton disabled={false} dispatch={dispatchFn} viewSwitch={SIDEBAR_VIEW_BOUNDARY_LAYER_MENU} />
        )
        wrapper.find('.switch-view-button').simulate('click')
        it('calls the dispatch method once', () => {
          expect(dispatchFn.calledOnce).toEqual(true)
        })
      })

      describe('if scopeSwitch and viewSwitch prop', () => {
        const dispatchFn = sinon.spy()
        const wrapper = shallow(
          <SwitchViewButton
            disabled={false}
            dispatch={dispatchFn}
            scopeSwitch={SCOPE_CENSUS_TRACTS}
            viewSwitch={SIDEBAR_VIEW_BOUNDARY_LAYER_MENU}
          />
        )
        wrapper.find('.switch-view-button').simulate('click')
        it('calls the dispatch method twice', () => {
          expect(dispatchFn.calledTwice).toEqual(true)
        })
      })
    })
  })
})
