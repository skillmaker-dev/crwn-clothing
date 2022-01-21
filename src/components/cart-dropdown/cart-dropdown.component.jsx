import React from "react";
import Button from "../custom-button/custom-button.component";
import './cart-dropdown.style.scss';
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
const CartDropDown = ({cartItems}) => 
(
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ) )
            }
        </div>
        <Button>CHECKOUT</Button>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropDown);