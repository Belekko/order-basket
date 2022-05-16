import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import CartItem from './CartItem.jsx'
import classes from './CartItems.module.css';

const CartItems = () => { 
  const { items} = useContext(CartContext);
  return (
    <ul className={classes['cart-items']}>
      {items.map((item,id) => (
        <CartItem key={id} name={item.name} price={item.price} amount={item.amount}/>
      ))}
    </ul>
  );
};

export default CartItems;
