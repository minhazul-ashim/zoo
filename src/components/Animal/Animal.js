import './Animal.css'
import React from 'react';

const Animal = (props) => {

    const { name, kingdom, lifespan, budget, foodHabit, img } = props.data
    console.log(props.data)
    return (
        <div className='animal-box'>
            <div className="img-div">
                <img className='img' src={img} alt="" />
            </div>
            <div className="animal-info">
                <h3 className='animal-name'>{name}</h3>
                <p>Kingdom: {kingdom}</p>
                <p>Lifespan: {lifespan}</p>
                <p>Food: {foodHabit}</p>
                <p className='animal-budget'>Budget: {budget}</p>
                <button>Add</button>
            </div>
        </div>
    );
};

export default Animal;