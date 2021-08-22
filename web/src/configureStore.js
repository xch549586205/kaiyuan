import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import app from './reducers';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import * as saga from "./reducers/sagaConfig"

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}
const store = createStore(app, applyMiddleware(...middlewares))
function* rootSagas() {
  let sagas = []
  for (let _saga in saga) {
    sagas.push(saga[_saga]())
  }

  yield all(sagas)
}

export const configureStore = () => store

export const runSaga = () => {
  console.log("reudx runSaga---------------------")
  sagaMiddleware.run(rootSagas);
}


