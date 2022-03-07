import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './views/App'
import 'bootstrap/dist/css/bootstrap.min.css';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)