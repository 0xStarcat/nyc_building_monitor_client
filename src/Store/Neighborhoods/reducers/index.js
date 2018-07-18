import * as neighborhoodsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  initialFetchCompleted: false,
  features: [],
  errors: []
}

export const neighborhoodsReducer = (neighborhoodsState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case neighborhoodsActions.AWAITING_NEIGHBORHOODS_RESPONSE: {
      return { ...neighborhoodsState, awaitingResponse: true, errors: [] }
    }

    case neighborhoodsActions.HANDLE_ERROR_RESPONSE: {
      return {
        ...neighborhoodsState,
        awaitingResponse: false,
        errors: action.data.errors
      }
    }

    case neighborhoodsActions.HANDLE_READ_NEIGHBORHOODS_RESPONSE: {
      console.log('Neighborhoods data received')
      return {
        ...neighborhoodsState,
        features: action.data['features'],
        awaitingResponse: false,
        initialFetchCompleted: true
      }
    }

    default:
      return neighborhoodsState
  }
}
