import * as types from '../constants/cartConstants';

export const addToCart = () => {
  return {
    type: types.CART_ADD_ITEM,
  }
}

export const removeCart = () => {
  return {
    type: types.CART_REMOVE_ITEM
  }
}