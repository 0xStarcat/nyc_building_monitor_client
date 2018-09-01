import * as updatesActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  rows: [],
  errors: []
}

export const updatesReducer = (updatesState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case updatesActions.AWAITING_UPDATES_RESPONSE: {
      return { ...updatesState, awaitingResponse: true, errors: [] }
    }

    case updatesActions.HANDLE_ERROR_RESPONSE: {
      return {
        ...updatesState,
        awaitingResponse: false,
        errors: action.data.errors
      }
    }

    case updatesActions.HANDLE_READ_UPDATES_RESPONSE: {
      return {
        ...updatesState,
        errors: [],
        rows: action.data['rows'].sort((a, b) => {
          return b.date - a.date
        }),
        awaitingResponse: false
      }
    }
    default:
      return updatesState
  }
}
