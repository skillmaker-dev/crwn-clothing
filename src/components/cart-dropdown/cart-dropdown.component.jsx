import React from "react";
import Button from "../custom-button/custom-button.component";
import './cart-dropdown.style.scss';

const CartDropDown = () => 
(
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <Button>CHECKOUT</Button>
    </div>
)

export default CartDropDown;