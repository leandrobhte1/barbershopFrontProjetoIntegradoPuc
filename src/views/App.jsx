import React from 'react'
import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import Messages from '../components/common/msg/messages'

import { BrowserRouter as Router } from 'react-router-dom';

import './app.css'

const App = props => (
    <div className="App">
        <Router>
            <Header />
            <Content />
            <Footer />
            <Messages></Messages>
        </Router>
    </div>
)

export default App