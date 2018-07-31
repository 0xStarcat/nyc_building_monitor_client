import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ControlBackButton } from '../index.js'

import {
  SIDEBAR_VIEW_LINKS_MENU,
  SIDEBAR_VIEW_MAP_DETAILS_MENU,
  SIDEBAR_VIEW_SELECTED_OBJECT,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS,
  SCOPE_VIOLATIONS
} from '../../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

describe('ControlBackButton', () => {
  describe('when rendering the back button', () => {
    describe('when view = SIDEBAR_VIEW_MAP_DETAILS_MENU', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_MAP_DETAILS_MENU,
        sidebarScope: SCOPE_CENSUS_TRACTS
      }
      const wrapper = shallow(<ControlBackButton appState={appState} />)

      it('renders the back button with view = SIDEBAR_VIEW_LINKS_MENU', () => {
        const backButtonProps = wrapper.props()
        expect(backButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_LINKS_MENU)
      })
    })

    describe('when scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SELECTED_OBJECT', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SELECTED_OBJECT,
        sidebarScope: SCOPE_CENSUS_TRACTS,
        landscapeOrientation: true
      }
      const wrapper = shallow(<ControlBackButton appState={appState} />)

      it('renders the back button with scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SELECTED_OBJECT', () => {
        const backButtonProps = wrapper.props()
        expect(backButtonProps.scopeSwitch).toEqual(SCOPE_CENSUS_TRACTS)
        expect(backButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_MAP_DETAILS_MENU)
      })

      describe('with buildings present', () => {
        const buildingsPresent = true

        describe('with landscape orientation', () => {
          const wrapper = shallow(<ControlBackButton appState={appState} buildingsPresent={buildingsPresent} />)

          it('displays the proper text', () => {
            const backButtonText = wrapper
              .children()
              .find('.button-label')
              .text()
            expect(backButtonText).toEqual('Map Details')
          })
        })

        describe('with portrait orientation', () => {
          const wrapper = shallow(
            <ControlBackButton
              appState={{ ...appState, landscapeOrientation: false }}
              buildingsPresent={buildingsPresent}
            />
          )

          it('displays the proper text', () => {
            const backButtonText = wrapper
              .children()
              .find('.button-label')
              .text()
            expect(backButtonText).toEqual('Map Details')
          })
        })

        describe('with buildings present', () => {
          const buildingsPresent = true
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
          expect(backButtonText).toEqual('Map Details')
        })
      })
    })

    describe('when scope = SCOPE_BUILDINGS and view = SIDEBAR_VIEW_SELECTED_OBJECT and there is selected CT', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SELECTED_OBJECT,
        sidebarScope: SCOPE_BUILDINGS
      }

      const selectedCensusTract = { id: 1 }

      const wrapper = shallow(<ControlBackButton appState={appState} selectedCensusTract={selectedCensusTract} />)

      it('renders the back button with scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SELECTED_OBJECT', () => {
        const backButtonProps = wrapper.props()
        expect(backButtonProps.scopeSwitch).toEqual(SCOPE_CENSUS_TRACTS)
        expect(backButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_SELECTED_OBJECT)
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

    describe('when scope = SCOPE_VIOLATIONS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
        sidebarScope: SCOPE_VIOLATIONS
      }

      const selectedBuilding = { name: '123 fake st' }
      const wrapper = shallow(<ControlBackButton appState={appState} selectedBuilding={selectedBuilding} />)
      it('renders the back button with scope = SCOPE_BUILDINGS and view = SIDEBAR_VIEW_SELECTED_OBJECT', () => {
        const backButtonProps = wrapper.props()

        expect(backButtonProps.scopeSwitch).toEqual(SCOPE_BUILDINGS)
        expect(backButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_SELECTED_OBJECT)
      })

      it('displays the proper text', () => {
        const backButtonText = wrapper
          .children()
          .find('.button-label')
          .text()
        expect(backButtonText).toEqual(selectedBuilding.name)
      })
    })

    describe('when scope = SCOPE_VIOLATIONS and view = SIDEBAR_VIEW_SELECTED_OBJECT', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SELECTED_OBJECT,
        sidebarScope: SCOPE_VIOLATIONS
      }

      const selectedBuilding = { name: '123 fake st' }
      const wrapper = shallow(<ControlBackButton appState={appState} selectedBuilding={selectedBuilding} />)
      it('renders the back button with scope = SCOPE_VIOLATIONS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
        const backButtonProps = wrapper.props()

        expect(backButtonProps.scopeSwitch).toEqual(SCOPE_VIOLATIONS)
        expect(backButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_SCOPED_OBJECTS)
      })

      it('displays the proper text', () => {
        const backButtonText = wrapper
          .children()
          .find('.button-label')
          .text()
        expect(backButtonText).toEqual('Violations')
      })
    })
  })
})
