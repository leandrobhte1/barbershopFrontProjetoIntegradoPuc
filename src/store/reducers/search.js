const initialState = {
    search: ''
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_CHANGED':
            return { ...state, search: action.payload}
        default:
            return state;
    }
}