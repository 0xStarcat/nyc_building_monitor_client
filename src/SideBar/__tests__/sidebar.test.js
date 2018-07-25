import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import Sidebar from '../index.js'
import {
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_STATE_INACTIVE,
  SIDEBAR_VIEW_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SIDEBAR_VIEW_SCOPED_OBJECT,
  SCOPE_CENSUS_TRACTS
} from '../../Store/AppState/actions'

import SidebarLayerMenu from '../SidebarLayerMenu'
import LayerInformationBox from '../LayerInformationBox'

configure({ adapter: new Adapter() })

describe('Sidebar', () => {
  const dispatchFn = sinon.spy()
  const store = {
    appState: {
      sidebarState: SIDEBAR_STATE_ACTIVE,
      landscapeOrientation: true,
      sidebarView: SIDEBAR_VIEW_MENU,
      sidebarScope: SCOPE_CENSUS_TRACTS
    },
    censusTracts: {
      selectedObject: {}
    }
  }

  describe('when loaded', () => {
    it('should render my component', () => {
      const wrapper = shallow(<Sidebar store={store} />)
      expect(wrapper.find('#sidebar').exists()).toBe(true)
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
      expect(wrapper.instance().getInactiveTransform()).toEqual('translateX(-400px)')
    })

    describe('with an active sidebar', () => {
      const wrapper = shallow(
        <Sidebar
          store={{
            ...store,
            appState: { ...store.appState, sidebarState: SIDEBAR_STATE_ACTIVE, landscapeOrientation: true }
          }}
        />
      )

      it('returns a style object with the correct styles', () => {
        expect(wrapper.instance().storeStyle()).toEqual({ transform: 'translateX(0)' })
      })
    })

    describe('with an inactive sidebar', () => {
      const wrapper = shallow(
        <Sidebar
          store={{
            ...store,
            appState: { ...store.appState, sidebarState: SIDEBAR_STATE_INACTIVE, landscapeOrientation: true }
          }}
        />
      )

      it('returns a style object with the correct styles', () => {
        expect(wrapper.instance().storeStyle()).toEqual({ transform: 'translateX(-400px)' })
      })
    })
  })

  describe('with portrait orientation', () => {
    const wrapper = shallow(
      <Sidebar store={{ ...store, appState: { ...store.appState, landscapeOrientation: false } }} />
    )

    it('calculates the active X translation', () => {
      expect(wrapper.instance().getActiveTransform()).toEqual('translateY(0)')
    })

    it('calculates the inactive X translation', () => {
      expect(wrapper.instance().getInactiveTransform()).toEqual('translateY(calc(100vh))')
    })

    describe('with an active sidebar', () => {
      const wrapper = shallow(
        <Sidebar
          store={{
            ...store,
            appState: { ...store.appState, sidebarState: SIDEBAR_STATE_ACTIVE, landscapeOrientation: false }
          }}
        />
      )

      it('returns a style object with the correct styles', () => {
        expect(wrapper.instance().storeStyle()).toEqual({ transform: 'translateY(0)' })
      })
    })

    describe('with an inactive sidebar', () => {
      const wrapper = shallow(
        <Sidebar
          store={{
            ...store,
            appState: { ...store.appState, sidebarState: SIDEBAR_STATE_INACTIVE, landscapeOrientation: false }
          }}
        />
      )

      it('returns a style object with the correct styles', () => {
        expect(wrapper.instance().storeStyle()).toEqual({ transform: 'translateY(calc(100vh))' })
      })
    })
  })

  describe('when sidebarView = SIDEBAR_VIEW_MENU', () => {
    const wrapper = shallow(<Sidebar store={store} store={store} />)

    it('renders the SidebarLayerMenu', () => {
      expect(wrapper.find(SidebarLayerMenu).length).toEqual(1)
    })
  })

  describe('when sidebarView = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
    const wrapper = shallow(
      <Sidebar
        store={store}
        store={{ ...store, appState: { ...store.appState, sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS } }}
      />
    )

    it('renders the LayerInformationBox', () => {
      expect(wrapper.find(LayerInformationBox).length).toEqual(1)
    })
  })
})
