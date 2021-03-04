import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';
 
// function logger(obj,next,action) Below is curried function
// next refers to next middleware or dispatch function
// const logger = function({ dispatch, getState }) {
//     return function (next){
//       return function (action) {
//         //Middleware code
//         console.log('ACTION.TYPE=',action.type);
//         next(action);
//       }
//     }
// }

// Middleware 
const logger = ({ dispatch, getState }) => (next) => (action) => {
  if(typeof action !== 'function'){
    console.log('ACTION.TYPE=',action.type);
  }
  next(action);
}

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if(typeof action === 'function') {
//     action(dispatch)
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger,thunk));
console.log('store',store);
// console.log('BEFORE state',store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })

// console.log('AFTER STATE',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
