import React from 'react'
import logo from './images/logo.png'
import Menu from './Menu'
import MenuUser from './MenuUser'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo col-md-4'>
            <img className="logoBarberShop" src={logo} alt="Logo"></img>
        </a>

        <Menu></Menu>
        <MenuUser></MenuUser>
    </header>
)