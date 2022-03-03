export const initialState = {
    user: { name: '', role: ''},
    appointments: [],

}

export function reducer(state, action) {
    switch (action.type) {
        case 'login':
            return { ...state, user: {name: action.payload.name, role: action.payload.role }}
        default:
            return state
    }
}