import { createStore } from 'redux';

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import UserReducer from './reducers/user'
import TabReducer from './reducers/tab'

export const rootReducer = combineReducers({
    user: UserReducer,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer
})

export function storeConfig() {
    return createStore(rootReducer)
}

export const initialState = {
    user: { name: '', role: '', logado: false},
    selected: '',
    search: '',
    menuUserOpen: false,
    visible: {}
}

