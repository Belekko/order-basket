import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={classes.total}>
      <span>{props.name}</span>
      <div className={classes.priceList}>
        <span> amount:{props.amount}</span>
        <span>{props.price.toFixed(2)} $</span>
      </div>
    </li>
  );
};

export default CartItem;
