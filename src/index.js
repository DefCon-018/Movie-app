import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// Middleware
const logger = function({dispatch, getState}){
  return function(next){
    return function(action){
      // console.log(action.type);
      next(action);
    }
  }
}

// const thunk = ({dispatch, getState}) => (next) => (action) =>{
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log('state', store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [1, 2, 3, 4, 5]
// })
// console.log('after dispatch', store.getState());

export const storeContext = createContext();
console.log(storeContext);

class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return(
      <storeContext.Provider value= {store}>
        {this.props.children}
      </storeContext.Provider>
    )
  }
}

export function connect(callback){
  return function (Component){
    class ConnectedComponent extends React.Component{
      constructor(props){
        super(props);
        this.unsubscribe = this.props.store.subscribe(()=> this.forceUpdate());
      }
      componentWillUnmount = () =>{
        this.unsubscribe();
      }
      render(){
        const {store} = this.props;
        const state = store.getState();
        const dataToBePassedAsProps = callback(state);
        return(
          <Component {...dataToBePassedAsProps} dispatch={store.dispatch}/>
        )
      }
    }
    class ConnectedComponentWrapper extends React.Component{
     render(){
       return(
        <storeContext.Consumer>
          {store => <ConnectedComponent store= {store}/>}
        </storeContext.Consumer>
       )
     }
    }
    return ConnectedComponentWrapper;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

