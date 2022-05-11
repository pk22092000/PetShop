import * as types from '../constants/productConstants'

export const productsListReducer = (state = {loading: true, products: []}, action) => {
  switch(action.type) {
    case types.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case types.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload || []
      }
    case types.PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export const productDetailsReducer = (state = {}, action) => {
  switch(action.type) {
    case types.PRODUCT_DETAILS_SUCCESS:
      return action.payload || {};
    default:
      return state;
  }
}