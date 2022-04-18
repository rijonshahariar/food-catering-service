import React from 'react';
import google from '../Images/social/google.png';
import facebook from '../Images/social/facebook.png';
import github from '../Images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorAlert;

    if (loading || loading1) {
        return <p>Loading...</p>;
    }

    if (error || error1) {
        errorAlert = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/');
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="devider w-50"></div>
                <p className=" m-2 px-2">or</p>
                <div className="devider w-50"></div>
            </div>
            {errorAlert}
            <div className="pointer justify-content-around d-flex">
                <img width={30} src={facebook} alt="" />

                <img onClick={() => signInWithGoogle()} width={30} src={google} alt="" />

                <img onClick={() => signInWithGithub()} width={30} src={github} alt="" />
            </div>
        </div>
    );
};

export default SocialLogin;