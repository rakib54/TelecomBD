import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth, provider } from './firebase.config';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory()
    const [isSignUp, setIsSignUp] = useState(false)
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    console.log(user);


    const handleSignIn = () => {
        auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((authuser) => {
                authuser.user.updateProfile({
                    displayName: user.fullName
                })
            })
            .catch((err) => alert(err.message))
        if (user.email && user.password) {
            auth.signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUser = { ...user }
                })
                .catch((err) => alert(err.message))
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const SwitchMode = () => {
        setIsSignUp((Toggle) => !Toggle)
    }

    const handleGoogleSignIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoggedInUser(user);
                history.push('/')

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);

            });

    }

    return (
        <>
            <div className="my-3">
                <h3 style={{ fontWeight: '600' }} className="text-center text-primary">{isSignUp ? 'Register' : 'Login'}</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            {
                                isSignUp &&
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Full Name</strong></label>
                                    <input name="fullName" value={user.fullName} onChange={handleChange} required type="text" className="form-control" id="exampleFormControl" placeholder="Enter your Name" />
                                </div>
                            }
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><b>Email</b></label>
                                <input name="email" value={user.email} onChange={handleChange} required type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label bold"><b>Password</b></label>
                                <input name="password" value={user.password} onChange={handleChange} required type="password" className="form-control" id="e" placeholder="Password" />
                            </div>
                            {
                                isSignUp &&
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label"><b>Confirm Password</b></label>
                                    <input name="confirmPassword" value={user.password} onChange={handleChange} required type="password" className="form-control" id="example" placeholder="Confirm Password" />
                                </div>
                            }

                            <div className="col-12 d-flex justify-content-between align-items-center ">
                                <button onClick={handleSignIn} className={isSignUp ? "btn btn-primary" : "btn btn-success"} type="submit">{isSignUp ? 'Register' : 'Login'}</button>
                                <Link onClick={SwitchMode} >{isSignUp ? 'Already have an account? sign In ' : "Don't have an account ? Register"}</Link>
                            </div>
                        </form>

                    </div>
                    {
                        isSignUp ? '' :
                            <div className="my-5 text-center google-btn">
                                <button onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Sign In with Google</button>
                            </div>
                    }

                </div>
            </div>
        </>
    );
};

export default Login