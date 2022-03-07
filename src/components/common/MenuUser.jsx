import React, { useReducer } from 'react'
import { initialState, reducer } from '../../store'
// import MenuItem from './MenuItem'
import UserImage from './images/userimage.png'
import SideBar from './Sidebar'
import UsuarioInfo from './UsuarioInfo'

import { Link } from 'react-router-dom'

const MenuUser = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    let user = { name: 'Leandro', role: 'Admin'};

    return (
        <div className="menus col-md-4">
            <div className="naoLogado">
                <ul className="top-menu top-menu-user">
                    <li className={`${props.user ? 'd-flex' : 'd-none'}`}>
                        <UsuarioInfo state={state } />
                    </li>
                    <li className={`${props.user ? 'd-none' : 'd-flex'}`}>
                        <Link to="login-cadastro">Login</Link>
                    </li>
                    <li className={`${props.user ? 'd-none' : 'd-flex'}`}>
                        <Link to="login-cadastro">Cadastrar</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="logado d-none" onClick={this.openMenu}>
                <div className="text">
                    <span className='poppins whiteText'>Olá, Leandro</span>
                    <span className='poppins perfilUser orangeText'>Admin</span>
                </div>
                <img className='userImage' src={UserImage} alt="Foto do usuário" />
                <div className="side-bar">
                    <SideBar></SideBar>
                </div>
            </div> */}
        </div>
    )

}

export default MenuUser
