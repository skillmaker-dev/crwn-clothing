import React from "react";
import './custom-button.style.scss';


const Button = ({children,isGoogleSignIn,...otherProperties}) => 
(
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProperties}>{children}</button>
);


export default Button;