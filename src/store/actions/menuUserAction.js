export function handleMenuChange(dispatch, menuUserOpen) {

    // fetch('url')
    //     .then(resp => resp.json())
    //     .then(json => dispatch({ type: 'userList', payload: json}))

    menuUserOpen = !menuUserOpen;

    dispatch({type: 'OPEN_CLOSE_MENU_USER', payload: menuUserOpen })
}