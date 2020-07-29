import React from 'react';
import './FrontCard.css'

const FrontCard = (props) => {
    return (
        <div id = {props.id} className = "Card-Container">
            <div className = "Head-Label-Div">
            <p className = "Head-Label" >{props.label}</p>
            </div>

        </div>
    );
}

export default FrontCard;