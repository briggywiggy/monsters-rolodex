import React from 'react';

export const CardItem = (props) => (
    <div className="card-item">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
);