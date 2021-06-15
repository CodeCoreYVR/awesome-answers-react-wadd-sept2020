import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = ({ currentUser }) => {
    return(
        <nav>
            <NavLink to='/questions'>Questions Index</NavLink>
            -
            { currentUser ? (
                <React.Fragment>
                    {/* This allow us to write components beside each other without wrapping
                    them in a parent container. This stops us from messing around the layout and
                    keeps the Navlinks as a direct child of the <nav> */}
                </React.Fragment>
            ) : () }
            <NavLink to='/questions/new'>New Questions</NavLink>
            - 
            <NavLink to='/sign_in'>Sign In</NavLink>
        </nav>
    )
}

export default Navbar;