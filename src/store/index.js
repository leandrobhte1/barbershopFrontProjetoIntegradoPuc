export const initialState = {
    user: { name: '', role: '', logado: false},
    appointments: [],
    selected: '',
    menuUserOpen: false,
    visible: {}
}

export function reducer(state, action) {
    switch (action.type) {
        case 'login':
            return { ...state, user: {name: action.payload.name, role: action.payload.role, logado: action.payload.logado }}
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload}
        case 'TAB_SHOWED':
            return { ...state, menuUserOpen: action.payload}
        case 'OPEN_CLOSE_MENU_USER':
            return { ...state, visible: action.payload}
        default:
            return state;
    }
}