import React from 'react';
import one from '../Images/social/1.png'
import two from '../Images/social/2.png'
import three from '../Images/social/3.png'

const Features = () => {
    return (
        <div>
            <div className="text-center mt-5 mb-5">
                <h1>Features</h1>
            </div>

            <div className="container mb-5 mt-5">
                <div className="row mx-0 icon-style text-center">
                    <div className="col-md-4">
                        <img src={one} />
                        <h5>Various Menu</h5>
                    </div>
                    <div className="col-md-4">
                        <img src={two} />
                        <h5>Select, you love to eat</h5>
                    </div>
                    <div className="col-md-4">
                        <img src={three} />
                        <h5>Pickup or Delivery</h5>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Features;