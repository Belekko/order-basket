import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import CartItem from './CartItem.jsx'
import classes from './CartItems.module.css';

const CartItems = () => {
  const { items,totalAmount } = useContext(CartContext);

  return (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} />
      ))}
    </ul>
  );
};

export default CartItems;
