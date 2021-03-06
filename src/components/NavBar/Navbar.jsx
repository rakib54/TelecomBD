import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import { auth } from '../Login/firebase.config';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const signOut = () => {
        auth.signOut()
        .then(() =>{
            setLoggedInUser("")
        })
        .catch((error) => console.log(error))
       
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink to="/" className="navbar-brand" >TelecomBD</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" exact to="/" className="nav-link" aria-current="page">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/service" className="nav-link">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/about" className="nav-link">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/contact" className="nav-link">Contact</NavLink>
                                        </li>
                                        {
                                            loggedInUser.email ? <li className="nav-item">
                                                <NavLink onClick={signOut} activeClassName="menu-active" to="/login" className="nav-link">Logout</NavLink>
                                            </li>
                                                :
                                                <li className="nav-item">
                                                    <NavLink activeClassName="menu-active" to="/login" className="nav-link">Login</NavLink>
                                                </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;