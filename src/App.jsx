import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route,Switch} from 'react-router-dom'
import AppWithRouterAccess from './LoginForm/AppWithRouterAccess';

function App() {
    return (
        <Router>
            <AppWithRouterAccess/>
        </Router>
    )
}
export default App ;


