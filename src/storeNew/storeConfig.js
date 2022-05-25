import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import UserReducer from './reducers/user'
import TabReducer from './reducers/tab'
import SearchReducer from './reducers/search'

const rootReducer = combineReducers({
    user: UserReducer,
    tab: TabReducer,
    search: SearchReducer,
    form: formReducer,
    toastr: toastrReducer
})

function storeConfig() {
    return createStore(rootReducer)
}

export default storeConfig