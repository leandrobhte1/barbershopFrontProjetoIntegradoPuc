import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/screens/About'
import Home from '../../views/screens/Home'
import Param from '../../views/screens/Param'

import './content.css'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/param/:id" element={<Param />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<Home />}></Route>
        </Routes>
    </main>
)

export default Content