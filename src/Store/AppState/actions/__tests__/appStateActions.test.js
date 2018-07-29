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

describe('pending tests', () => {
  pending('pending')
})
