import * as violationsActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  features: [],
  errors: [],
  selectedObject: null,
  selectedObjects: null
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
      // console.log('violations data received')
      return {
        ...violationsState,
        errors: [],
        features: action.data['features']
          .sort((a, b) => {
            return b.properties.date - a.properties.date
          })
          .map((feature, index) => ({ ...feature, properties: { ...feature.properties, index: index } })),
        awaitingResponse: false
      }
    }

    case violationsActions.UPDATE_SELECTED_VIOLATION_OBJECT: {
      return { ...violationsState, selectedObject: action.data }
    }

    case violationsActions.NEXT_SELECTED_VIOLATION: {
      if (violationsState.selectedObject.index + 1 >= violationsState.features.length) return violationsState
      return {
        ...violationsState,
        selectedObject: violationsState.features[violationsState.selectedObject.index + 1].properties
      }
    }

    case violationsActions.PREV_SELECTED_VIOLATION: {
      if (violationsState.selectedObject.index <= 0) return violationsState
      return {
        ...violationsState,
        selectedObject: violationsState.features[violationsState.selectedObject.index - 1].properties
      }
    }

    case violationsActions.CLEAR_VIOLATIONS: {
      return { ...violationsState, selectedObject: null, selectedObjects: null, features: [] }
    }

    default:
      return violationsState
  }
}
