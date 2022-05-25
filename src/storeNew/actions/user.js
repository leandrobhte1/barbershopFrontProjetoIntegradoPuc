// Action Creator
export function login(user) {
    return {
        type: 'LOGIN',
        payload: user
    }
}

export function handleMenuChange(menuUserOpen) {
    menuUserOpen = !menuUserOpen;
    return {
        type: 'OPEN_CLOSE_MENU_USER',
        payload: menuUserOpen
    }
}