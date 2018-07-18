import * as serviceCallsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  features: [],
  errors: [],
  selectedObject: {}
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
        features: action.data['features'],
        awaitingResponse: false
      }
    }

    case serviceCallsActions.UPDATE_SELECTED_SERVICE_CALL_OBJECT: {
      console.log(action.data)
      return { ...serviceCallsState, selectedObject: action.data }
    }

    default:
      return serviceCallsState
  }
}
