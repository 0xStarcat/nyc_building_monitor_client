import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { readCensusTracts } from '../../../CensusTracts/actions'
import { readNeighborhoods } from '../../../Neighborhoods/actions'
import * as appStateActions from '../index.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ buildings: {} })

afterEach(() => {
  store.clearActions()
})

describe('openInformationBox', () => {
  it('dispatches CHANGE_INFORMATION_CONTENT_CODE, CHANGE_SIDEBAR_VIEW, ACTIVATE_SIDEBAR on success', () => {
    const code = 'A'
    store.dispatch(appStateActions.openInformationBox(code))
    const actions = store.getActions()
    const expectedActions = [
      appStateActions.changeInformationContentCode(code),
      appStateActions.changeSidebarView(appStateActions.SIDEBAR_VIEW_INFORMATION),
      appStateActions.activateSidebar()
    ]

    expect(actions).toEqual(expectedActions)
  })
})
