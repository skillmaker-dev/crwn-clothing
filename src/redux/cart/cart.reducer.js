import { addItemToCart } from "./cart.utils";
import CartActionsTypes from "./cart.types";
import { removeItemFromCart } from "./cart.utils";
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
        case CartActionsTypes.CLEAR_ITEMS_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => (cartItem.id !== action.payload.id))
            }
        case CartActionsTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }
            
    }
}

export default cartReducer;