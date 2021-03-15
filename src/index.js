import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

const store = createStore(movies);
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

