import * as salesActions from '../actions'

export const initialState = {
  awaitingResponse: false,
  features: [],
  errors: [],
  selectedObject: {}
}

export const salesReducer = (salesState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case salesActions.AWAITING_SALES_RESPONSE: {
      return { ...salesState, awaitingResponse: true, errors: [] }
    }

    case salesActions.HANDLE_ERROR_RESPONSE: {
      return {
        ...salesState,
        awaitingResponse: false,
        errors: action.data.errors
      }
    }

    case salesActions.HANDLE_READ_SALES_RESPONSE: {
      console.log('sales data received')
      return {
        ...salesState,
        features: action.data['features'],
        awaitingResponse: false
      }
    }

    case salesActions.UPDATE_SELECTED_SALE_OBJECT: {
      console.log(action.data)
      return { ...salesState, selectedObject: action.data }
    }

    default:
      return salesState
  }
}
