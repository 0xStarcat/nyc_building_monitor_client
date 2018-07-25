import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import Sidebar from '../index.js'
import {
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_INACTIVE,
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_BUILDING_LAYER_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SIDEBAR_VIEW_SCOPED_OBJECT,
  SIDEBAR_VIEW_SCOPE_MENU,
  SCOPE_CENSUS_TRACTS
} from '../../Store/AppState/actions'

import {
  MOBILE_SIDEBAR_ACTIVE_X_TRANSLATION,
  MOBILE_SIDEBAR_INACTIVE_X_TRANSLATION,
  MOBILE_SIDEBAR_ACTIVE_Y_TRANSLATION,
  MOBILE_SIDEBAR_PREVIEW_Y_TRANSLATION,
  MOBILE_SIDEBAR_INACTIVE_Y_TRANSLATION
} from '../../SharedStyles/__constants__/sidebarConstants.js'

import MobileSidebarScopeMenu from '../MobileSidebarScopeMenu'
import SidebarLayerMenu from '../SidebarLayerMenu'
import LayerInformationBox from '../LayerInformationBox'
import SidebarBuildingLayerMenu from '../SidebarBuildingLayerMenu'

configure({ adapter: new Adapter() })

describe('Sidebar', () => {
  const dispatchFn = sinon.spy()
  const store = {
    appState: {
      sidebarState: SIDEBAR_STATE_ACTIVE,
      landscapeOrientation: true,
      sidebarView: SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
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
    describe('with SIDEBAR_STATE_ACTIVE', () => {
      const wrapper = shallow(
        <Sidebar
          store={{
            ...store,
            appState: { ...store.appState, landscapeOrientation: true, sidebarState: SIDEBAR_STATE_ACTIVE }
          }}
        />
      )
      it('calculates the active X translation', () => {
        expect(wrapper.instance().getSidebarStateXTransform()).toEqual(
          `translateX(${MOBILE_SIDEBAR_ACTIVE_X_TRANSLATION})`
        )
      })
    })

    describe('with SIDEBAR_STATE_INACTIVE', () => {
      const wrapper = shallow(
        <Sidebar
          store={{
            ...store,
            appState: { ...store.appState, landscapeOrientation: true, sidebarState: SIDEBAR_STATE_INACTIVE }
          }}
        />
      )
      it('calculates the inactive X translation', () => {
        expect(wrapper.instance().getSidebarStateXTransform()).toEqual(
          `translateX(${MOBILE_SIDEBAR_INACTIVE_X_TRANSLATION})`
        )
      })
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
    describe('with SIDEBAR_STATE_ACTIVE', () => {
      const wrapper = shallow(
        <Sidebar
          store={{
            ...store,
            appState: { ...store.appState, landscapeOrientation: true, sidebarState: SIDEBAR_STATE_ACTIVE }
          }}
        />
      )

      it('calculates the active Y translation', () => {
        expect(wrapper.instance().getSidebarStateYTransform()).toEqual(
          `translateY(${MOBILE_SIDEBAR_ACTIVE_Y_TRANSLATION})`
        )
      })
    })

    describe('with SIDEBAR_STATE_PREVIEW', () => {
      const wrapper = shallow(
        <Sidebar
          store={{
            ...store,
            appState: { ...store.appState, landscapeOrientation: true, sidebarState: SIDEBAR_STATE_PREVIEW }
          }}
        />
      )

      it('calculates the active Y translation', () => {
        expect(wrapper.instance().getSidebarStateYTransform()).toEqual(
          `translateY(${MOBILE_SIDEBAR_PREVIEW_Y_TRANSLATION})`
        )
      })
    })

    describe('with SIDEBAR_STATE_INACTIVE', () => {
      const wrapper = shallow(
        <Sidebar
          store={{
            ...store,
            appState: { ...store.appState, landscapeOrientation: true, sidebarState: SIDEBAR_STATE_INACTIVE }
          }}
        />
      )

      it('calculates the active Y translation', () => {
        expect(wrapper.instance().getSidebarStateYTransform()).toEqual(
          `translateY(${MOBILE_SIDEBAR_INACTIVE_Y_TRANSLATION})`
        )
      })
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
        expect(wrapper.instance().storeStyle()).toEqual({ transform: 'translateY(100vh)' })
      })
    })
  })

  describe('when sidebarView = SIDEBAR_VIEW_SCOPE_MENU', () => {
    const wrapper = shallow(
      <Sidebar store={{ ...store, appState: { ...store.appState, sidebarView: SIDEBAR_VIEW_SCOPE_MENU } }} />
    )

    it('renders the MobileSidebarScopeMenu', () => {
      expect(wrapper.find(MobileSidebarScopeMenu).length).toEqual(1)
    })
  })

  describe('when sidebarView = SIDEBAR_VIEW_BUILDING_LAYER_MENU', () => {
    const wrapper = shallow(
      <Sidebar store={{ ...store, appState: { ...store.appState, sidebarView: SIDEBAR_VIEW_BUILDING_LAYER_MENU } }} />
    )

    it('renders the SidebarBuildingLayerMenu', () => {
      expect(wrapper.find(SidebarBuildingLayerMenu).length).toEqual(1)
    })
  })

  describe('when sidebarView = SIDEBAR_VIEW_BOUNDARY_LAYER_MENU', () => {
    const wrapper = shallow(<Sidebar store={store} />)

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
