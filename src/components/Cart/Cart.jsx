import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart = () => {
  const cartItem = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Samsa', amount: 2, price: 12.99 }]}
    </ul>
  );
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33.51</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['btton--alt']}>Close</button>
        <button className={classes.button}>Open</button>
      </div>
    </Modal>
  );
};

export default Cart;
