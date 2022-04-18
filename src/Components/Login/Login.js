import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import login from '../Images/4957136.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
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
                        <Form.Control type="email" ref={emailRef} placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                    </Form.Group>

                    {errorElement}

                    <p>New to Aahar? <Link className="form_link" to="/register">Create a new account</Link></p>
                    <p>Forget Password? <button className='btn-link text-primary pe-auto' onClick={resetPassword}>Reset Password</button> </p>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                    <SocialLogin></SocialLogin>

                </Form>

            </div>

            <ToastContainer />
        </div >
    );
};

export default Login;