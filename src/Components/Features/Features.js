import React from 'react';
import one from '../Images/social/1.png'
import two from '../Images/social/2.png'
import three from '../Images/social/3.png'
import './Features.css'
const Features = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-5 heading'>FEAUTRES</h1>
            <section id="counts" className="counts">

                <div className="container" data-aos="fade-up">
                    <div className="row"><div className="col-lg-4 col-md-6">
                        <div className="count-box"> <img src={one} alt='' />
                            <span className="purecounter">HYGIENIC</span><p>We carefully monitor the best hygiene factors - Cross-contamination, Cleaning, Chilling, and Cooking - to prevent the most common food safety problems.</p>
                        </div>
                    </div>
                        <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <img src={two} alt='' />
                                <span className="purecounter">TASTE</span><p>we've handpicked cooks who cook exceedingly well so we proudly deliver super healthy food and you keep coming back to us.

                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <img src={three} alt='' />
                                <span className="purecounter">QUALITY</span>
                                <p>To maintain excellent food , our mission starts from procuring the best items and ends at your doorstep in delivering the right food your doorstep.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;