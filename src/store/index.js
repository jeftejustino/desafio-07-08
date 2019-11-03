import { createStore, applyMiddleware, compose } from 'redux';
import createMiddlewareSaga from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createMiddlewareSaga({ sagaMonitor });

const enchancer = __DEV__
  ? compose(
      console.tron.createEnhancer(),
      applyMiddleware(sagaMiddleware)
    )
  : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enchancer);

sagaMiddleware.run(rootSaga);

export default store;
