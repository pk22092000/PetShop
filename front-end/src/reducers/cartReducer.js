import * as types from '../constants/cartConstants'

export const cartReducer = (state = 0 , action) => {
  switch (action.type) {
    case types.CART_ADD_ITEM:
      return state + 1;
    case types.CART_REMOVE_ITEM:
      return state - 1;
    default:
      return state;
  }
}