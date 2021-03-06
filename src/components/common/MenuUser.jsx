import React, { useReducer } from 'react'
import { initialState, rootReducer as reducer } from '../../store'
import UserImage from './images/userimage.png'
import UsuarioInfo from './UsuarioInfo'
import If, { Else } from './If'
import OptionsMenu from './OptionsMenu';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const MenuUser = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="menus col-md-4">
            <div className="naoLogado">
                <ul className="top-menu top-menu-user">
                    <li className={`${props.state.user.name ? 'd-flex' : 'd-none'}`}>
                        <UsuarioInfo state={state } />
                    </li>
                    <li className={`${props.state.user.name ? 'd-none' : 'd-flex'}`}>
                        <Link to="login-cadastro">Login</Link>
                    </li>
                    <li className={`${props.state.user.name ? 'd-none' : 'd-flex'}`}>
                        <Link to="login-cadastro">Cadastrar</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}

function mapStateToProps(state){
    return {
        user: state
    }
}

export default connect(mapStateToProps)(MenuUser)
