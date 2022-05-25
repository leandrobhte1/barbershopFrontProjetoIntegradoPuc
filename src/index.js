import React from 'react'
import ReactDOM from 'react-dom'

import App from './views/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";

import { Provider } from 'react-redux'
import { rootReducer as reducers } from './store/index'

import configStore from './storeNew/storeConfig'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)