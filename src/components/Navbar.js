import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav>
            <NavLink to='/questions'>Questions Index</NavLink>
            -
            <NavLink to='/questions/new'>New Questions</NavLink>
        </nav>
    )
}

export default Navbar;