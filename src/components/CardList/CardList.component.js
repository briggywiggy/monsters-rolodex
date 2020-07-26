import React from 'react';
import { CardItem } from '../CardItem/CardItem.component';

export const CardList = (props) => {
    return (
        <div className="card-list">
        {
            props.monsters.map((monster, index) => (
                <CardItem key={index} monster={monster}></CardItem>
            ))
        }
        </div>
    )
}