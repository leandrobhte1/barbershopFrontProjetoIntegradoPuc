export function login(dispatch, user) {

    // fetch('url')
    //     .then(resp => resp.json())
    //     .then(json => dispatch({ type: 'userList', payload: json}))

    dispatch({type: 'login', payload: user })
}