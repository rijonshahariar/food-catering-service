import React from 'react';
import Features from '../../Features/Features';
import Banner from '../Banner/Banner';
import Meals from '../Meals/Meals';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Meals></Meals>
            <Features></Features>
        </>
    );
};

export default Home;