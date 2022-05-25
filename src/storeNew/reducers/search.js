const initialState = {
    search: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SEARCH_CHANGED':
            return { ...state, search: action.payload}
        default:
            return state
    }
}