import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import login from '../Images/4957136.jpg'
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()


    if (loading) {
        return <p>Loading...</p>;
    }
    const handleCreateUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Password Didn't Match")
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/login')
    }

    return (
        <div className="row mx-auto">

            <div className="col-md-6 img-container ">
                <img className="img-fluid" src={login} alt="" />
            </div>
            <div className="col-md-6 align-items-center justify-content-center mt-5">
                <form onSubmit={handleCreateUser}>
                    <h2 className="text-center text-primary">Register</h2>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Your name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email address</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm password" className="form-label">Confirm Password</label>
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <p>Already have an account? <Link className="form_link" to="/login">Sign in</Link></p>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>


            </div>
        </div>
    );
};

export default Register;