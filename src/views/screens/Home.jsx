import React from 'react'
import UsuarioInfo from '../../components/common/UsuarioInfo'

const Home = props => (
    <div className="Home">
        <h1>Component Home</h1>
        <p>Bem-vindo</p>
        <UsuarioInfo usuario={{ nome: 'Leandro'}} />
    </div>
)

export default Home