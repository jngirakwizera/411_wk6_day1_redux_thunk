import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk';
import state from './state'

export default createStore(reducers, state, applyMiddleware(thunk))