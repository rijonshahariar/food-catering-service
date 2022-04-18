import React, { useEffect, useState } from "react";
import MealCard from '../MealCard/MealCard'
const Meals = () => {

    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    return (
        <>
            <div id='menu' className="text-center">
                <h1>Most Popular Cuisine</h1>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row text-center g-4 justify-content-center align-items-center d-flex mx-0">
                    {
                        meals.map(meals => <MealCard key={meals.id} meal={meals} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Meals;