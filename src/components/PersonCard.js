import React, { useState } from 'react';


const PersonCard = (props) => {
    const [newAge, setNewAge] = useState(props.age);
    return (
        <div className="container">
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {newAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={() => setNewAge(newAge + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;