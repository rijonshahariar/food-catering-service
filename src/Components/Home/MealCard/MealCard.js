import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './MealCard.css'
const MealCard = ({ meal }) => {
    const { picture, name, bdt, rate } = meal;
    return (
        <>
            <div className="col-md-4">
                <div className="card shadow-sm card-style">
                    <img className="card-img-top" src={picture} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <Rating name="read-only" value={rate} readOnly />
                        <h6>BDT {bdt}৳</h6>
                        <Link to='/checkout' ><button>Order Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MealCard;