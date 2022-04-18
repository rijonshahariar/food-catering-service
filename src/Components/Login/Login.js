import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import login from '../Images/4957136.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [user] = useAuthState(auth);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    // log in with email and password
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value)
    }

    const handleUserSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className="row mx-auto">

            <div className="col-md-6 img-container ">
                <img className="img-fluid" src={login} alt="" />
            </div>
            <div className="col-md-6 align-items-center justify-content-center d-flex">
                <form onSubmit={handleUserSignIn}>
                    <h2 className="text-center text-primary mb-4">Login</h2>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onBlur={handleEmailBlur} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onBlur={handlePasswordBlur} className="form-control" id="exampleInputPassword1" required />
                    </div>

                    <p>New to Aahar? <Link className="form_link" to="/register">Create a new account</Link></p>
                    <button type="submit" className="btn btn-primary">Submit</button>

                    <SocialLogin></SocialLogin>

                </form>
            </div>


        </div >
    );
};

export default Login;