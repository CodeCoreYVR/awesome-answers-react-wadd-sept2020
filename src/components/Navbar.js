import React from 'react';
import {NavLink} from 'react-router-dom';
import {Session} from '../requests';
import {CurrentDateTime} from './CurrentDateTime';

const Navbar = ({ currentUser, onSignOut, clocksCount }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
        <nav className="ui secondary pointing menu">
            <NavLink className="item" to='/questions'>Questions Index</NavLink>
            
            { currentUser ? (
                <React.Fragment>
                    <NavLink className="item" to='/questions/new'>New Questions</NavLink>
                    <div className="right menu">
                        <span className="item" >Welcome, {currentUser.full_name}</span>
                    </div>
                    <button className="small ui blue button" onClick={handleSignOut}>Sign Out</button>
                    <div className="ui top right orange large label">
                        {clocksCount && <CurrentDateTime />}
                    </div>
                    {/* React Fragment allow us to write components beside each other without wrapping
                    them in a parent container. This stops us from messing around the layout and
                    keeps the Navlinks as a direct child of the <nav>. The short from is <> </> */}
                </React.Fragment>
            ) : (
                <div className="right menu">
                    <NavLink className="small ui blue button" to='/sign_in'>Sign In</NavLink>  
                    <NavLink className="small ui orange button" to='/sign_up'>Sign Up</NavLink>
                </div>
            ) } 
        </nav>
    )
}

export default Navbar;