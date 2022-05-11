import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer'
import { productDetailsReducer, productsListReducer } from './reducers/productReducer'

// import { addToCart, removeCart } from './actions/cartAction'
// import { listProduct } from './actions/productAction'

const initialState = {
  cart: 0
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsListReducer,
  productDetails: productDetailsReducer,
})

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
// store.dispatch(addToCart())
// store.dispatch(addToCart())
// store.dispatch(addToCart())
// store.dispatch(addToCart())
// store.dispatch(listProduct())

console.log("Default: ", store.getState())

export default store;