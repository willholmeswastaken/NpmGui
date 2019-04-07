import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import moduleSaga from './sagas'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

export const configureStore = initialState => {
  const middleware = [sagaMiddleware, routerMiddleware(history)];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(connectRouter(history)(rootReducer), initialState, composeEnhancers(applyMiddleware(...middleware)));
  sagaMiddleware.run(moduleSaga);
  return store;
}
