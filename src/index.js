import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const Reducers = combineReducers({
  trendings: () => ({
    hashtags: [['#OneBitCode', '10k'], ['#RubyOnRails', '10k']]
  })
});

const Store = createStore(Reducers);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
