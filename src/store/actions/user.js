export function login(dispatch, user) {

    // fetch('url')
    //     .then(resp => resp.json())
    //     .then(json => dispatch({ type: 'userList', payload: json}))
    console.log("user action creator.: ", user);
    dispatch({type: 'LOGIN', payload: user })
}