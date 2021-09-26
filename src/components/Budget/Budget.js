import React from 'react';
import './Budget.css'


//This component sets the information in budget and selected animals section. The props it receives are the individual animals names and their annual budget;
const Budget = (props) => {

    const budgetArr = props.budget;
    const animalsArr = props.name;
    let total = 0;

    for (const budget of budgetArr) {

        total += budget;
    }

    return (
        <div className='budget-container'>
            <div className="budget-main">
                <div className="">
                    <h4>Animals:</h4>
                    <h4>Spent:</h4>
                </div>
                <div className="budget-cost">
                    <h4>{budgetArr.length}</h4>
                    <h4>${total}</h4>
                </div>
            </div>
            <div className="all-selected">
                <h2 className='select-title'>Added</h2>
                {
                    animalsArr.map(animal => <h3 className='selected-animal' key={Math.random() * 10}>{animal}</h3>)
                }
            </div>
        </div>
    );
};

export default Budget;