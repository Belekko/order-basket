import { useReducer } from 'react';
import { CartContext } from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === 'ADD') {
    const currentIndex = prevState.items.findIndex((el) => el.id === action.item.id);
    if (currentIndex === -1) {
      const updatedItems = prevState.items.concat(action.item);
      const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    } else {
      const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;
      const updatedItems = prevState.items.map((el, idx) => {
        return idx === currentIndex
          ? {
              ...el,
              price: el.price + action.item.price * action.item.amount,
              amount: el.amount + action.item.amount,
            }
          : el;
      });
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }
  return prevState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
