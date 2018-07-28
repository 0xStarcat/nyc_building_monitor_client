import * as serviceCallsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  features: [],
  errors: [],
  selectedObject: null
}

export const serviceCallsReducer = (serviceCallsState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case serviceCallsActions.AWAITING_SERVICE_CALLS_RESPONSE: {
      return { ...serviceCallsState, awaitingResponse: true, errors: [] }
    }

    case serviceCallsActions.HANDLE_ERROR_RESPONSE: {
      return {
        ...serviceCallsState,
        awaitingResponse: false,
        errors: action.data.errors
      }
    }

    case serviceCallsActions.HANDLE_READ_SERVICE_CALLS_RESPONSE: {
      console.log('serviceCalls data received')
      return {
        ...serviceCallsState,
        features: action.data['features'].sort((a, b) => {
          return b.properties.date - a.properties.date
        }),
        awaitingResponse: false
      }
    }

    case serviceCallsActions.UPDATE_SELECTED_SERVICE_CALL_OBJECT: {
      return { ...serviceCallsState, selectedObject: action.data }
    }

    case serviceCallsActions.CLEAR_SERVICE_CALLS: {
      return { ...serviceCallsState, selectedObject: null, selectedObjects: null, features: [] }
    }

    default:
      return serviceCallsState
  }
}
