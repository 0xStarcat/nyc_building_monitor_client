import * as searchActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  results: [],
  errors: [],
  searchTimeout: undefined
}

export const searchReducer = (searchState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case searchActions.AWAITING_SEARCH_RESPONSE: {
      return { ...searchState, awaitingResponse: true, errors: [] }
    }
    case searchActions.HANDLE_ERROR_RESPONSE: {
      return {
        ...searchState,
        awaitingResponse: false,
        results: [],
        errors: action.data.errors
      }
    }
    case searchActions.SET_SEARCH_TIMEOUT: {
      return { ...searchState, searchTimeout: action.data }
    }
    case searchActions.HANDLE_READ_SEARCH_RESPONSE: {
      return {
        ...searchState,
        awaitingResponse: false,
        results: action.data['results'] || []
      }
    }
    case searchActions.CLEAR_SEARCH: {
      return { ...searchState, results: [] }
    }

    default:
      return searchState
  }
}
