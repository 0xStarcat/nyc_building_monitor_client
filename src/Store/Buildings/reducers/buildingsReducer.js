import * as buildingsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  initialFetchCompleted: false,
  features: [],
  errors: []
}

export const buildingsReducer = (buildingsState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case buildingsActions.AWAITING_BUILDINGS_RESPONSE: {
      return { ...buildingsState, awaitingResponse: true, errors: [] }
    }

    case buildingsActions.HANDLE_ERROR_RESPONSE: {
      return {
        ...buildingsState,
        awaitingResponse: false,
        errors: action.data.errors
      }
    }

    case buildingsActions.HANDLE_READ_BUILDINGS_RESPONSE: {
      console.log('buildings data received')
      return {
        ...buildingsState,
        features: action.data['features'],
        awaitingResponse: false,
        initialFetchCompleted: true
      }
    }

    default:
      return buildingsState
  }
}
