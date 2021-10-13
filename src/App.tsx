import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createAppStore } from './app-store'
import { createRootSaga } from './sagas'
import { HomePageComponent } from './pages/HomePage'
import { createAPIServices } from './server'
export function App() {
  const history = createBrowserHistory()
  const sagaMiddleware = createSagaMiddleware()
  const store = createAppStore(
    history,
    sagaMiddleware,
    routerMiddleware(history)
  )
  const apiServices = createAPIServices()
  const rootsaga = createRootSaga(apiServices)
  sagaMiddleware.run(rootsaga)
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
          {/* <KeycloakProvider> */}
          <HomePageComponent />
          {/* </KeycloakProvider> */}
      </ConnectedRouter>
    </Provider>
  )
}

export default App
