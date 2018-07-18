import * as violationsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  features: [],
  errors: []
}

export const violationsReducer = (violationsState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case violationsActions.AWAITING_VIOLATIONS_RESPONSE: {
      return { ...violationsState, awaitingResponse: true, errors: [] }
    }

    case violationsActions.HANDLE_ERROR_RESPONSE: {
      return {
        ...violationsState,
        awaitingResponse: false,
        errors: action.data.errors
      }
    }

    case violationsActions.HANDLE_READ_VIOLATIONS_RESPONSE: {
      console.log('violations data received')
      console.log(action.data)
      return {
        ...violationsState,
        features: action.data['features'],
        awaitingResponse: false
      }
    }

    default:
      return violationsState
  }
}
