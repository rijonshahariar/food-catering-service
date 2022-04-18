import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import login from '../Images/4957136.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [user] = useAuthState(auth);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    // log in with email and password
    const [signInWithEmailAndPassword, ruser, loading, error] = useSignInWithEmailAndPassword(auth);

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
        navigate(from, { replace: true });

    }

    return (
        <div className="row mx-auto">

            <div className="col-md-6 img-container ">
                <img className="img-fluid" src={login} alt="" />
            </div>
            <div className="col-md-6 align-items-center justify-content-center d-flex">

                <Form onSubmit={handleUserSignIn}>
                    <h2 className="text-center text-primary mb-4">Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleEmailBlur} placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handlePasswordBlur} placeholder="Password" />
                    </Form.Group>

                    <p className="mt-2 text-danger">{error?.message}</p>
                    <p>New to Aahar? <Link className="form_link" to="/register">Create a new account</Link></p>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <SocialLogin></SocialLogin>
                </Form>

            </div>


        </div >
    );
};

export default Login;