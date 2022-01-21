import React from "react";
import './custom-button.style.scss';


const Button = ({children,isGoogleSignIn,inverted,...otherProperties}) => 
(
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProperties}>{children}</button>
);


export default Button;