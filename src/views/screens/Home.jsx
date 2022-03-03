import React, { useReducer } from 'react'
import { initialState, reducer } from '../../store'
import UsuarioInfo from '../../components/common/UsuarioInfo'
import { login } from '../../store/actions/user'

const Home = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    let user = { name: 'Leandro', role: 'Admin'};

    return (
        <div className="Home">
            <h1>Component Home</h1>
            <p>Bem-vindo</p>
            <UsuarioInfo state={state } />
            <button className="btn" onClick={ () => login(dispatch, user)}>logar</button>
            <button className="btn" onClick={ () => login(dispatch, initialState.user)}>deslogar</button>
        </div>
    )
    
}

export default Home