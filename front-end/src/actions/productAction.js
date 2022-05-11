import axios from 'axios'
import * as types from '../constants/productConstants'

export const listProduct = () => async (dispatch) => {
  dispatch({
    type: types.PRODUCT_LIST_REQUEST,
  })
  try {
    const { data } = await axios.get("https://6274d000345e1821b22fe205.mockapi.io/api/products")
    dispatch({
      type: types.PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: types.PRODUCT_LIST_FAIL,
      payload: error.message,
    })
  }
}

export const detailsProduct = (productID) => async (dispatch) => {
  const { data } = await axios.get(`https://6274d000345e1821b22fe205.mockapi.io/api/products/${productID}`)
  dispatch({
    type: types.PRODUCT_DETAILS_SUCCESS,
    payload: data,
  })
}