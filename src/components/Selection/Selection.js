import React from 'react';
import './Selection.css'

const Selection = (props) => {

    const animals = props.data;

    return (
        <div className='selected'>
            <div className="all-selected">
                <h1 className='select-title'>Added</h1>
                {
                    animals.map(animal => <h2 className='selected-animal' key={Math.random() * 10}>{animal}</h2>)
                }
            </div>
        </div>
    );
};

export default Selection;