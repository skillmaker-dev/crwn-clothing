import { addItemToCart } from "./cart.utils";
import CartActionsTypes from "./cart.types";
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE,action) => 
{
    switch(action.type)
    {
        case CartActionsTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
        case CartActionsTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
    }
}

export default cartReducer;