import React from 'react';
import './Budget.css'

const Budget = (props) => {

    const budgetArr = props.data;
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
        </div>
    );
};

export default Budget;