import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './apps/Components/Navbar'
import Walkthrough from "./Pages/Walkthrough";
import Product from './Pages/Product'
import Activation from './Pages/Activation'
import Reporting from './Pages/Reporting'
import Cost from './Pages/Cost'
import BaseRegistration from "./apps/Registration/BaseRegistration";
import Privilege from './Pages/Privilege'
import DevSetting from './Pages/DevSetting'


function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/walkthrough' element={<Walkthrough/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/activation' element={<Activation/>}/>
                <Route path='/reporting' element={<Reporting/>}/>
                <Route path='/cost' element={<Cost/>}/>
                <Route path='/registration' element={<BaseRegistration/>}/>
                <Route path='/privilege' element={<Privilege/>}/>
                <Route path='/devsetting' element={<DevSetting/>}/>
            </Routes>
        </Router>
    )
}

export default App 
