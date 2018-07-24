import * as neighborhoodsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  initialFetchCompleted: false,
  selectedObject: null,
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
      console.log('Neighborhoods data received', action.data)
      return {
        ...neighborhoodsState,
        features: action.data['features'],
        awaitingResponse: false,
        initialFetchCompleted: true
      }
    }

    case neighborhoodsActions.UPDATE_SELECTED_NEIGHBORHOOD_OBJECT: {
      return { ...neighborhoodsState, selectedObject: action.data }
    }

    default:
      return neighborhoodsState
  }
}
