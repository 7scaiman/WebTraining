import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
       <nav className={"Navigation"}>
           <div className="NavLink">
           <NavLink to="/" >Home</NavLink>
           </div>
           <div className="NavLink">
           <NavLink to="/CreateNewAddress" >  Create New Adress</NavLink>
           </div>
       </nav>
    );
}

export default Navigation;