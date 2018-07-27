import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { ControlBackButton } from '../index.js'

import {
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

const appState = {
  baseLayerScope: SCOPE_CENSUS_TRACTS,
  sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
  sidebarScope: SCOPE_CENSUS_TRACTS
}

describe('ControlBackButton', () => {
  describe('when rendering the back button', () => {
    describe('when view = SIDEBAR_VIEW_BOUNDARY_LAYER_MENU', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
        sidebarScope: SCOPE_CENSUS_TRACTS
      }
      const wrapper = shallow(<ControlBackButton appState={appState} />)

      it('disables the back button', () => {
        const backButtonProps = wrapper.props()
        expect(backButtonProps.disabled).toEqual(true)
      })
    })

    describe('when scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
        sidebarScope: SCOPE_CENSUS_TRACTS
      }
      const wrapper = shallow(<ControlBackButton appState={appState} />)

      it('renders the back button with scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
        const backButtonProps = wrapper.props()
        expect(backButtonProps.scopeSwitch).toEqual(SCOPE_CENSUS_TRACTS)
        expect(backButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_BOUNDARY_LAYER_MENU)
      })

      describe('with buildings present', () => {
        const buildingsPresent = true

        const wrapper = shallow(<ControlBackButton appState={appState} buildingsPresent={buildingsPresent} />)

        it('displays the proper text', () => {
          const backButtonText = wrapper
            .children()
            .find('.button-label')
            .text()
          expect(backButtonText).toEqual('Building Layers')
        })
      })

      describe('without buildings present', () => {
        const buildingsPresent = false

        const wrapper = shallow(<ControlBackButton appState={appState} buildingsPresent={buildingsPresent} />)

        it('displays the proper text', () => {
          const backButtonText = wrapper
            .children()
            .find('.button-label')
            .text()
          expect(backButtonText).toEqual('Region Layers')
        })
      })
    })

    describe('when scope = SCOPE_BUILDINGS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
        sidebarScope: SCOPE_BUILDINGS
      }

      const wrapper = shallow(<ControlBackButton appState={appState} />)

      it('renders the back button with scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
        const backButtonProps = wrapper.props()
        expect(backButtonProps.scopeSwitch).toEqual(SCOPE_CENSUS_TRACTS)
        expect(backButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_SCOPED_OBJECTS)
      })

      describe('with a selected neighborhood', () => {
        const selectedNeighborhood = { name: 'Williamsburg' }

        const wrapper = shallow(<ControlBackButton appState={appState} selectedNeighborhood={selectedNeighborhood} />)

        it('displays the proper text', () => {
          const backButtonText = wrapper
            .children()
            .find('.button-label')
            .text()
          expect(backButtonText).toEqual('Williamsburg')
        })
      })

      describe('with a selected census tract', () => {
        const selectedCensusTract = { name: '12345' }

        const wrapper = shallow(<ControlBackButton appState={appState} selectedCensusTract={selectedCensusTract} />)

        it('displays the proper text', () => {
          const backButtonText = wrapper
            .children()
            .find('.button-label')
            .text()
          expect(backButtonText).toEqual('#12345')
        })
      })
    })
  })
})
