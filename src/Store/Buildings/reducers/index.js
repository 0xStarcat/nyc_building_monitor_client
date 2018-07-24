import * as buildingsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  features: [],
  errors: [],
  selectedObject: null
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
        awaitingResponse: false,
        features: action.data['features']
      }
    }
    case buildingsActions.UPDATE_SELECTED_BUILDING_OBJECT: {
      return { ...buildingsState, selectedObject: action.data }
    }

    case buildingsActions.CLEAR_BUILDINGS: {
      return { ...buildingsState, selectedObject: null, features: [] }
    }

    default:
      return buildingsState
  }
}
