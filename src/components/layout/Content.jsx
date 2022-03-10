import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/screens/About'
import Home from '../../views/screens/Home'
import Search from '../../views/screens/Search'
import Reports from '../../views/screens/Reports'
import History from '../../views/screens/Historico'
import Avaliacao from '../../views/screens/Avaliacao'
import LoginCadastro from '../../views/screens/loginCadastro'
import Param from '../../views/screens/Param'

import './content.css'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login-cadastro" element={<LoginCadastro />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/reports" element={<Reports />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="/avaliacao" element={<Avaliacao />}></Route>
            {/* <Route path="/param/:id" element={<Param />}></Route>
            <Route path="/about" element={<About />}></Route> */}
            <Route path="*" element={<Home />}></Route>
        </Routes>
    </main>
)

export default Content