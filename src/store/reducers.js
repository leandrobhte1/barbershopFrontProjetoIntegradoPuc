import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

// import { reducer } from './index'

const rootReducer = combineReducers({
    // reducer: reducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer