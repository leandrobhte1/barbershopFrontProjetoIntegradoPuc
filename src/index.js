import React from 'react'
import ReactDOM from 'react-dom'

import App from './views/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";

import { Provider } from 'react-redux'
// import { storeConfig } from './store/index';

import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer as reducers } from './store/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

//const store = storeConfig()
// const store = createStore(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)