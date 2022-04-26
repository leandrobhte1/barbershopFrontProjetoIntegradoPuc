const initialState = {
    user: { firstName: '', lastName: '', email: '', role: '', logado: false},
    menuUserOpen: false,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'OPEN_CLOSE_MENU_USER':
            return { ...state, menuUserOpen: action.payload}
        default:
            return state;
    }
}