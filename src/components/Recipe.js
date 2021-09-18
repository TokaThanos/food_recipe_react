import React from 'react';

const Recipe = ({title, image, list}) => (
    <div className="element" onClick={() => window.open(list.url)}>
        <h3 className="element-text">{title}</h3>
        <img className="element-img" src={image} alt="" /> 
    </div>
)

export default Recipe;