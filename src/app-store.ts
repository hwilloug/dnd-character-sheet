import {
    combineReducers,
    createStore,
    applyMiddleware,
    StoreEnhancer,
    Middleware
  } from 'redux'
  import { SagaMiddleware } from 'redux-saga'
  import { composeWithDevTools } from 'redux-devtools-extension'
  import { connectRouter } from 'connected-react-router'
  import { History } from 'history'
  
  const createReducer = (history: any) =>
    combineReducers({
      router: connectRouter(history)
    })
  const appReducer = createReducer(window.history)
  
  export type AppState = ReturnType<typeof appReducer>
  const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
  })
  
  export function createAppStore(
    history: History,
    sagaMiddleware: SagaMiddleware,
    ...additionalMiddlewares: Middleware[]
  ) {
    const middlewares = [sagaMiddleware, ...additionalMiddlewares]
    const enhancer: StoreEnhancer =
      process.env.NODE_ENV === 'development'
        ? composeEnhancers(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares)
    return createStore(createReducer(history), undefined, enhancer)
  }
  