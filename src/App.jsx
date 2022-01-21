import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route,Switch} from 'react-router-dom'
// import Navbar from './apps/Components/Navbar'
// import Walkthrough from "./Pages/Walkthrough";
// import Product from './Pages/Product'
// import Activation from './Pages/Activation'
// import Reporting from './Pages/Reporting'
// import Cost from './Pages/Cost'
// import Privilege from './Pages/Privilege'
// import DevSetting from './Pages/DevSetting'
// import Registration from "./apps/Registration/Registration";
import Staff from './LoginForm/Staff';
import AppWithRouterAccess from './LoginForm/AppWithRouterAccess';


function App() {
    return (
        <Router>
            <AppWithRouterAccess/>
            {/* <Navbar/>
            <Switch>
                <Route path='/walkthrough' element={Walkthrough}/>
                <Route path='/product' element={Product}/>
                <Route path='/activation' element={Activation}/>
                <Route path='/reporting' element={Reporting}/>
                <Route path='/cost' element={Cost}/>
                <Route path='/registration' element={Registration}/>
                <Route path='/privilege' element={Privilege}/>
                <Route path='/devsetting' element={DevSetting}/>
            </Switch> */}
        </Router>
    )
}
export default App ;


