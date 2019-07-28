import React from 'react';
import  './navbar.css'
import Weather from './Weather'




const Navbar =() => {

    return(
        <React.Fragment>
    
    <nav className='nav'>
            <div className="brand">
               elements
            </div>
            <ul className="nav-links">
                <li className='nav-items'>tops</li>
                <li className='nav-items'>bottoms</li>
            </ul>
        </nav>
        <div className='climate'>climate<Weather /></div>
           
        </React.Fragment>
    )
}







export default Navbar