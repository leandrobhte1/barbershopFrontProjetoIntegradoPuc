export function login(dispatch, user) {

    // fetch('url')
    //     .then(resp => resp.json())
    //     .then(json => dispatch({ type: 'userList', payload: json}))

    console.log("User action login: ", user);

    dispatch({type: 'login', payload: user })
}