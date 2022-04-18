import React from 'react';
import './Footer.css'
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <div className="row w-100  mx-0 footer-bg text-white p-5">
                <div className="col-md-4 footer">
                    <h3 className="mb-4">About us</h3>
                    <p>
                        Unlike others, Aahar is devoted to delivering super delicious food and fabulous service to spice up your event.

                        Whatever you’re planning – a gorgeous wedding, a high-end corporate event, new year party, or anything – I will create an amazing food experience suited to your taste.
                    </p>
                </div>
                <div className="col-md-4 footer">
                    <h3 className="mb-4">Links</h3>

                    <h6 className="hover-style" >Home</h6>
                    <h6 className="hover-style">Special Item</h6>
                    <h6 className="hover-style">Todays Menu</h6>
                    <h6 className="hover-style">Order Policy</h6>
                    <h6 className="hover-style">Contact Us</h6>


                </div>
                <div className="col-md-4 footer">
                    <h3 className="mb-4">Press</h3>
                    <h6 className="hover-style">Press Release</h6>
                    <h6 className="hover-style">Advertise</h6>
                    <h6 className="hover-style">Blogs</h6>
                </div>

                <p className="copyright">
                    <small>Copyright {year} © Shahariar Rijon</small>
                </p>
            </div>
        </>
    );
};

export default Footer;