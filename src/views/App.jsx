import React from 'react'
import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'

import { BrowserRouter as Router } from 'react-router-dom';

import './app.css'

const App = props => (
    <div className="App">
        <Router>
            <Content />
            <Menu />
        </Router>
    </div>
)

export default App