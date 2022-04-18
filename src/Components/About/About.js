import React from 'react';
import Rijon from '../Images/RijonAuthorProfile.png'
import './About.css'
const About = () => {
    return (
        <>
            <div className='container mt-5'>

                <div className="reviewcontainer">
                    <div className='caption'>
                        <img src={Rijon} alt="" />

                        <h1 className='text-primary'>Shahariar Rijon</h1>

                        <p>This is Shahariar Rijon. I am hardworking and ambitious for an excellent career.
                            <br />I believe that, if anyone works hard he can achieve success for sure. I am amicable in nature and love to make a network with a good soul. I always try to keep smiling and make myself happy.
                            I always have to do things perfectly.<br /> I have a fear of disappointing people. I will rather do anything to make sure they're happy, rather than do what I want to do. I am compulsively critical of myself and my actions.
                            <br /> I believe that my greatest strength is the ability to solve problems quickly and efficiently. <br />I try to see any given situation from multiple perspectives, which makes me uniquely qualified to complete my work even under challenging conditions.</p>



                    </div>
                </div>
            </div>

        </>
    );
};

export default About;