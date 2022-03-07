const initialState = {
    user: { name: '', role: '', logado: false},
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'login':
            return { ...state, user: {name: action.payload.name, role: action.payload.role, logado: action.payload.logado }}
        case 'OPEN_CLOSE_MENU_USER':
            return { ...state, menuUserOpen: action.payload}
        default:
            return state;
    }
}