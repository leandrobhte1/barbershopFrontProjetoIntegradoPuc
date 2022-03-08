import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './views/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";

import { Provider } from 'react-redux'
import { storeConfig } from './store/index';

const store = storeConfig()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)