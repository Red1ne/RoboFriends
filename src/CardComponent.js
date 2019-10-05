import React from 'react';
import Card from './Card'
const CardComponent = ( { robots } ) => {
    return (
        robots.map((user, i) => {
            return (<Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}/>);
        })
    );
}

export default CardComponent;