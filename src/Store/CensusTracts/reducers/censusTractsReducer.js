import * as censusTractsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  initialFetchCompleted: false,
  features: [],
  errors: []
}

export const censusTractsReducer = (censusTractsState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case censusTractsActions.AWAITING_CENSUS_TRACTS_RESPONSE: {
      return { ...censusTractsState, awaitingResponse: true, errors: [] }
    }

    case censusTractsActions.HANDLE_ERROR_RESPONSE: {
      return {
        ...censusTractsState,
        awaitingResponse: false,
        errors: action.data.errors
      }
    }

    case censusTractsActions.HANDLE_READ_CENSUS_TRACTS_RESPONSE: {
      console.log('Census tracts data received')
      return {
        ...censusTractsState,
        features: action.data['features'],
        awaitingResponse: false,
        initialFetchCompleted: true
      }
    }

    default:
      return censusTractsState
  }
}
