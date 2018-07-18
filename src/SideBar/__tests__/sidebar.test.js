import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import Sidebar from '../index.js'

configure({ adapter: new Adapter() })

describe('Sidebar', () => {
  const dispatchFn = sinon.spy()
  const store = {
    appState: {
      sidebarActive: true,
      landscapeOrientation: true,
      sidebarMode: 'censusTracts'
    },
    censusTracts: {
      selectedObject: {}
    }
  }

  describe('when appState.sidebarActive', () => {
    it('should render my component', () => {
      const wrapper = shallow(<Sidebar store={store} />)
      expect(wrapper.find('#sidebar').exists()).toBe(true)
    })
  })

  describe('when appState.sidebarActive not true', () => {
    it('should render my component', () => {
      const wrapper = shallow(<Sidebar store={{ ...store, appState: { ...store.appState, sidebarActive: false } }} />)
      expect(wrapper.find('#sidebar').exists()).toBe(false)
    })
  })

  describe('#collapseSidebar', () => {
    const wrapper = shallow(<Sidebar dispatch={dispatchFn} store={store} />)

    it('calls the dispatch method', () => {
      wrapper.instance().collapseSidebar()
      expect(dispatchFn.calledOnce).toEqual(true)
    })
  })

  describe('with landscape orientation', () => {
    const wrapper = shallow(
      <Sidebar store={{ ...store, appState: { ...store.appState, landscapeOrientation: true } }} />
    )
    it('calculates the active X translation', () => {
      expect(wrapper.instance().getActiveTransform()).toEqual('translateX(0)')
    })

    it('calculates the inactive X translation', () => {
      expect(wrapper.instance().getInactiveTransform()).toEqual('translateX(-500px)')
    })

    describe('with an active sidebar', () => {
      const wrapper = shallow(
        <Sidebar
          store={{ ...store, appState: { ...store.appState, sidebarActive: true, landscapeOrientation: true } }}
        />
      )

      it('returns a style object with the correct styles', () => {
        expect(wrapper.instance().storeStyle()).toEqual({ transform: 'translateX(0)' })
      })
    })

    describe('with an inactive sidebar', () => {
      const wrapper = shallow(
        <Sidebar
          store={{ ...store, appState: { ...store.appState, sidebarActive: false, landscapeOrientation: true } }}
        />
      )

      it('returns a style object with the correct styles', () => {
        expect(wrapper.instance().storeStyle()).toEqual({ transform: 'translateX(-500px)' })
      })
    })
  })

  describe('with portrait orientation', () => {
    const wrapper = shallow(
      <Sidebar store={{ ...store, appState: { ...store.appState, landscapeOrientation: false } }} />
    )

    it('calculates the active X translation', () => {
      expect(wrapper.instance().getActiveTransform()).toEqual('translateY(calc(100vh - 500px))')
    })

    it('calculates the inactive X translation', () => {
      expect(wrapper.instance().getInactiveTransform()).toEqual('translateY(calc(100vh + 500px))')
    })

    describe('with an active sidebar', () => {
      const wrapper = shallow(
        <Sidebar
          store={{ ...store, appState: { ...store.appState, sidebarActive: true, landscapeOrientation: false } }}
        />
      )

      it('returns a style object with the correct styles', () => {
        expect(wrapper.instance().storeStyle()).toEqual({ transform: 'translateY(calc(100vh - 500px))' })
      })
    })

    describe('with an inactive sidebar', () => {
      const wrapper = shallow(
        <Sidebar
          store={{ ...store, appState: { ...store.appState, sidebarActive: false, landscapeOrientation: false } }}
        />
      )

      it('returns a style object with the correct styles', () => {
        expect(wrapper.instance().storeStyle()).toEqual({ transform: 'translateY(calc(100vh + 500px))' })
      })
    })
  })
})
