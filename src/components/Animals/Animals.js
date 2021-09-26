import Animal from '../Animal/Animal';
import './Animals.css'


//This component receives the individual animal's data as the props and a click handler which is passed to child components;
const Animals = (props) => {

    const animals = props.data;

    const eventFunc = props.func;

    return (
        <div className='animals-container'>
            {
                animals.map(animal => <Animal key={animal.name} data={animal} func={eventFunc}></Animal>)
            }
        </div>
    );
};

export default Animals;