const initialState = {
    user: { username: '', logado: false, access_token: '', refresh_token: ''},
    menuUserOpen: false,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            console.log("action payload.: ", action.payload);
            console.log("state.: ", state);
            return { ...state, user: action.payload }
        case 'OPEN_CLOSE_MENU_USER':
            return { ...state, menuUserOpen: action.payload}
        default:
            return state;
    }
}