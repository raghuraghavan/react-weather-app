import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import { watcherSagas } from './sagas/weather_saga';
// Logger with default options
import logger from 'redux-logger'
import Log from './middlewares/log';

import './index.css';
import App from './components/app';

import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(Log,logger, sagaMiddleware));

sagaMiddleware.run(watcherSagas);

// const createStoreWithMiddleware = applyMiddleware(Log, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();