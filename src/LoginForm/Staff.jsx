import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from '../apps/Components/Navbar'
import Walkthrough from "../Pages/Walkthrough";
import Product from '../Pages/Product'
import Activation from '../Pages/Activation'
import Reporting from '../Pages/Reporting'
import Cost from '../Pages/Cost'
import Privilege from '../Pages/Privilege'
import DevSetting from '../Pages/DevSetting'
import Registration from "../apps/Registration/Registration";

function Home(){
    return(
<Router>
<Navbar/>
    <Switch>    
                 <Route  path='/walkthrough'><Walkthrough/></Route>
                <Route path='/product' ><Product/></Route>
                <Route path='/activation' ><Activation/></Route>
                <Route path='/reporting' ><Reporting/></Route>
                <Route path='/cost' ><Cost/></Route>
                <Route path='/registration' ><Registration/></Route>
                <Route path='/privilege' ><Privilege/></Route>
                <Route path='/devsetting' ><DevSetting/></Route>
    </Switch>

</Router>   
    )
}
export default Home;



