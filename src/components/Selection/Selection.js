import React from 'react';

const Selection = (props) => {

    const animals = props.data;

    return (
        <div>
            <h1>Added</h1>
            {
                animals.map(animal => <h2>{animal}</h2>)
            }
        </div>
    );
};

export default Selection;