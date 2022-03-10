import React, { useReducer, useEffect } from 'react'
import { initialState, rootReducer as reducer } from '../../store'
import If, { Else } from './If'

import User from './images/user1.png'
import OptionsMenu from './OptionsMenu';
import { login } from '../../store/actions/user'

import { toastr } from 'react-redux-toastr'

import { handleMenuChange } from '../../store/actions/menuUserAction'

const UsuarioInfo = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // useEffect(() => {
    //     let user = { name: 'Leandro', role: 'Admin', logado: true};
    //     login(dispatch, user)
    //     toastr.success('Sucesso','Login realizado com sucesso!')
    // }, []);

    return (
        <div className='usuarioInfo' onClick={ () => handleMenuChange(dispatch, state.user.menuUserOpen)}>
            <If test={state && state.user.user.name}>
                <div className="text">
                    <span>Olá, <strong>{state.user.user.name}</strong>!</span>    
                    <span className="role">{state.user.user.role}</span>
                </div>
                <img className='imgUser' src={User} alt="imgUser" />
                {state.user.menuUserOpen &&
                    <div className="optionsMenu">
                        <OptionsMenu></OptionsMenu>
                    </div>
                }
                <Else>
                    <span>Seja bem-vindo amigão!</span>    
                </Else>
            </If>
        </div>
    )


}

export default UsuarioInfo