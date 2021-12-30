import './Navbar.css'
import {Link} from 'react-router-dom'
import React , {useState} from 'react'
import {FaBars , FaTimes } from 'react-icons/fa'

function Navbar() {
    const [icon , setIcon] = useState(false)
    const handleClick = () => {
        setIcon(!icon)
    }
    const closeSideDrawer = () => {
        setIcon(false)
    }
    return (
        <>
        <nav className = 'navbar'>
            <Link to = '/' className =
            'nav-logo' onClick = 
            {closeSideDrawer}>B2</Link>
            <div className = 'menu-icon'
            onClick = {handleClick}>
                {
                    icon ? <FaTimes 
                          className = 'fa-times'>
                        </FaTimes> : <FaBars className = 'fa-bars'>

                        </FaBars>
                }

            </div>
            <ul className = {
                icon ? 'nav-menu active':
                  'nav-menu'
            }>
              
            
                <li>

                    <Link to = '/walkthrough' className = 
                    'nav-links' onClick = 
                     {closeSideDrawer}>Walkthrough</Link>
                </li>
                <li>
                     <Link to = '/product' className =
                     'nav-links' onClick = 
                     {closeSideDrawer}>Product</Link>
                 </li>
                <li>
                      <Link to = '/activation' className = 
                      'nav-links' onClick = 
                       {closeSideDrawer}>Activation</Link>
                </li>
                <li>
                      <Link to = '/reporting' className = 
                       'nav-links' onClick = 
                       {closeSideDrawer}>Reporting</Link>
                </li>
                <li>
                        <Link to = '/cost' className = 
                        'nav-links' onClick = 
                        {closeSideDrawer}>Cost</Link>
                </li>
                <li>
                        <Link to = '/registration' className = 
                        'nav-links' onClick = 
                         {closeSideDrawer}>Registration</Link>
                </li>
                <li>
                         <Link to = '/privilege' className =
                         'nav-links' onClick = 
                         {closeSideDrawer}>Privilege</Link>
                </li>
                <li>
                         <Link to = '/devsetting' className =
                         'nav-links' onClick = 
                         {closeSideDrawer}>DevSetting</Link>
                </li>
                <li>
                    <Link to = '/ver.6.0' className =
                    'nav-links' >Ver.6.0</Link>
                </li>
                
                
        </ul>
        </nav>
        </>
    )
}

export default Navbar
