import React from 'react';
import  './navbar.css'




const Navbar =(props) => {

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
        <div className='climate'>
        climate<div>{props.temp}&deg;</div></div>
        {/* `Yo, ${name}!` */}
           
        </React.Fragment>
    )
}







export default Navbar