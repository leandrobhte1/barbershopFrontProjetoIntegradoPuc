import React, { useReducer } from 'react'
import { initialState, rootReducer as reducer } from '../../store'
import logo from './images/logo.png'
import Menu from './Menu'
import MenuUser from './MenuUser'

const Header = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <header className='main-header'>
            <a href='/#/' className='logo col-md-4'>
                <img className="logoBarberShop" src={logo} alt="Logo"></img>
            </a>

            <Menu></Menu>
            <MenuUser state={state.user}></MenuUser>
        </header>
    )



}

export default Header