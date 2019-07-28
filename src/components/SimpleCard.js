import React from "react";
import "./cards.css";


const Cards = props => {
  
  return (
    <React.Fragment >

          <article className='cards'>
        
        <img className="img" src={props.imgSrc} alt="shirt" />
        <h1>{props.description}</h1>
        <a href='#'>buy</a>
        </article>
 

    </React.Fragment> 
  );
};

export default Cards;
