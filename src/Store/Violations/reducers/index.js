import * as violationsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  features: [],
  errors: [],
  selectedObject: {}
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
      return {
        ...violationsState,
        features: action.data['features'],
        awaitingResponse: false
      }
    }

    case violationsActions.UPDATE_SELECTED_VIOLATION_OBJECT: {
      console.log(action.data)
      return { ...violationsState, selectedObject: action.data }
    }

    default:
      return violationsState
  }
}
