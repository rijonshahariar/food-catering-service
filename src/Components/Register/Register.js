import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import login from '../Images/4957136.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, hookerror] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (loading) {
        return <p>Loading..</p>
    }

    if (user) {
        navigate('/')
    }

    const handleUserSignUp = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password did not match')
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className="row mx-auto">

            <div className="col-md-6 img-container ">
                <img className="img-fluid" src={login} alt="" />
            </div>
            <div className="col-md-6 align-items-center justify-content-center d-flex">
                <form onSubmit={handleUserSignUp}>
                    <h2 className="text-center text-primary mb-4">Register</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your name</label>
                        <input type="name" onChange={(e) => setName(e.target.value)} name='name' className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} name='email' className="form-control" required />
                        <div id="emailHelp" className="form-text ">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} name='confirmPassword' className="form-control" required />
                    </div>
                    <p className="mt-2 text-danger">{hookerror?.message}</p>
                    <p className="mt-2 text-danger">{error}</p>

                    <p>Already have an account? <Link className="form_link" to="/login">Sign in</Link></p>

                    <button type="submit" className="btn btn-primary">Register</button>
                    <SocialLogin></SocialLogin>
                </form>


            </div>
        </div>
    );
};

export default Register;