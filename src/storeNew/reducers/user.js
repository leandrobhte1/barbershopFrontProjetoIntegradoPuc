const initialState = {
    user: { username: '', logado: false, access_token: '', refresh_token: ''},
    menuUserOpen: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'OPEN_CLOSE_MENU_USER':
            return {
                ...state,
                menuUserOpen: action.payload
            }
        default:
            return state
    }
}