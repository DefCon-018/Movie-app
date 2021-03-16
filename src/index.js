import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// Middleware
const logger = function({dispatch, getState}){
  return function(next){
    return function(action){
      console.log(action.type);
      next(action);
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log('state', store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [1, 2, 3, 4, 5]
// })
// console.log('after dispatch', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store= {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

