import React from 'react';

const Budget = (props) => {

    const budgetArr = props.data;
    let total = 0;

    for (const budget of budgetArr) {

        total += budget;
    }

    return (
        <div className='budget'>
            <h2>Animals: {budgetArr.length}</h2>
            <h2>Spent: ${total}</h2>
        </div>
    );
};

export default Budget;