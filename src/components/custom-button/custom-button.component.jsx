import React from "react";
import './custom-button.style.scss';


const Button = ({children,...otherProperties}) => 
(
    <button className="custom-button" {...otherProperties}>{children}</button>
);


export default Button;