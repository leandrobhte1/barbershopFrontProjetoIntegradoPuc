import React, { useReducer, useEffect } from 'react'
import { initialState, rootReducer as reducer } from '../../store'
import If, { Else } from './If'

import User from './images/user1.png'
import OptionsMenu from './OptionsMenu';
import { login } from '../../store/actions/user'

import { toastr } from 'react-redux-toastr'

import { handleMenuChange } from '../../store/actions/menuUserAction'
import { connect } from 'react-redux'

function UsuarioInfo(props){

    const { state } = props;
    console.log("PROPPPSSS.: ", state)

    //console.log("state.: ", state);

    return (
        <div className='usuarioInfo'>
            {/* <If test={state && state.user.user.name}> */}
            <h1>{state.user.user.username}</h1>
                <div className="text">
                    <span>Olá, <strong>ok</strong>!</span>    
                    <span className="role">ok</span>
                </div>
                <img className='imgUser' src={User} alt="imgUser" />
                {/* {state.user.menuUserOpen &&
                    <div className="optionsMenu">
                        <OptionsMenu></OptionsMenu>
                    </div>
                } */}
                {/* <Else>
                    <span>Seja bem-vindo amigão!</span>    
                </Else>
            </If> */}
        </div>
    )


}

function mapStateToProps(state) {
    return {
        state: state,
    };
  }
  
  export default connect(mapStateToProps)(UsuarioInfo);