import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={classes.total}>
      <span>{props.name}</span>
      <span>{props.amount}</span>
      <span>{props.price}</span>
    </li>
  );
};

export default CartItem;
