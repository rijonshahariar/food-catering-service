import React from 'react';
import payment from '../Images/payment.png'
import './CheckOut.css'
const CheckOut = () => {
    return (

        <div>
            <div className="from_area">

                <form action="#">

                    <div className="from_container">

                        <div className="from_col">

                            <h3 className="title">billing address</h3>

                            <div className="inputBox">
                                <span>Full name :</span>
                                <input type="text" placeholder="Full nam" />
                            </div>
                            <div className="inputBox">
                                <span>Fmail :</span>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="inputBox">
                                <span>Address :</span>
                                <input type="text" placeholder="Address" />
                            </div>
                            <div className="inputBox">
                                <span>city :</span>
                                <input type="text" placeholder="Dhaka" />
                            </div>

                            <div className="flex">
                                <div className="inputBox">
                                    <span>state :</span>
                                    <input type="text" placeholder="Kishergonj" />
                                </div>
                                <div className="inputBox">
                                    <span>zip code :</span>
                                    <input type="text" placeholder="123" />
                                </div>
                            </div>

                        </div>

                        <div className="from_col">

                            <h3 className="title">payment</h3>

                            <div className="inputBox">
                                <span>cards accepted :</span>
                                <img src={payment} alt="" />
                            </div>
                            <div className="inputBox">
                                <span>name on card :</span>
                                <input type="text" placeholder="mr ibrahim" />
                            </div>
                            <div className="inputBox">
                                <span>credit card number :</span>
                                <input type="number" placeholder="0000000000" />
                            </div>
                            <div className="inputBox">
                                <span>exp month :</span>
                                <input type="text" placeholder="january" />
                            </div>

                            <div className="flex">
                                <div className="inputBox">
                                    <span>exp year :</span>
                                    <input type="number" placeholder="2022" />
                                </div>
                                <div className="inputBox">
                                    <span>CVV :</span>
                                    <input type="text" placeholder="1234" />
                                </div>
                            </div>

                        </div>

                    </div>

                    <input type="submit" value="proceed to checkout" className="submit-btn" />

                </form>

            </div>
        </div>


    );
};
export default CheckOut;