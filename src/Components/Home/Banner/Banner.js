import React from 'react';
import banner1 from '../../Images/Banners/banner1.png';

import './Banner.css'

const Banner = () => {

  return (
    <>
      <section className='hero'>
        <div className="position-relative overflow-hidden p-3 p-md-5 text-center">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-1 text-light fw-normal">Aahar</h1>
            <p className="lead text-light fw-normal">Trusted Home Food Catering Service in Chittagong</p>
            <a className="btn btn-outline-success" href="#menu">Explore</a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;