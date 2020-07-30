import React from 'react';
import './ProductCard.css';
import { useSelector } from 'react-redux';


const ProductCard = (props) => {


    const subdomain = useSelector(state => state.finderState.subdomain); 
    return (
        <div className = "Main-Container" style = {{width: '500px', height: props.height, float: 'left', marginRight: '5%', marginBottom: '2%'}}  >
                <div>
                    <img className = "Image" src = {props.image}></img>
                </div>
                <div className = "Name-Div" >
                    <h1 className = "Name" >{subdomain}</h1>
                    <p className = "Name" style = {{marginLeft: '50%', marginTop: '2%', color: '#477979', fontWeight: 'bold'}}  >Add to Cart</p>
                </div>
        </div>
    );
}

export default ProductCard;