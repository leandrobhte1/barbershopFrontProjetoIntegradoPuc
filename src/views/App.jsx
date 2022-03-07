import React from 'react'
import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'
import Header from '../components/common/header'
import Footer from '../components/common/footer'

import { BrowserRouter as Router } from 'react-router-dom';

import './app.css'

const App = props => (
    <div className="App">
        <Router>
            <Header />
            <Content />
            {/* <Menu /> */}
            <Footer />
        </Router>
    </div>
)

export default App