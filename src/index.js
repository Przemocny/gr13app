import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { reducer as postsReducer } from './redux-app/store'

import './reset.css';
import './style.scss';

import App from './App';


const logger = store => next => action => {
    if (action){
      const selectedStore = action.type.split('/')[0]
      console.log('\n\n')
      console.log(`ACTION ${action.type} WITH PAYLOAD`, action.payload)
      let result = next(action)
      console.log(`NEXT STATE OF ${selectedStore}`, store.getState()[selectedStore])
      console.log('\n\n')
      return result
    }
  }
  
  

const store = configureStore({
    reducer : {
        posts: postsReducer
    },
    middleware:[logger]
})

const AppWithRedux = () => {
    return <Provider store={store}>
        <App/>
    </Provider>
}

ReactDOM.render(<AppWithRedux />, document.getElementById('root'));