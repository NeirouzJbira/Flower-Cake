import CartActionTypes from "./actionTypes";
import { addItemToCart, removeItemFromCart } from "./utils";

const INITIAL_STATE = {
  items: [],
  hidden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SHOW_HIDE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default CartReducer;
