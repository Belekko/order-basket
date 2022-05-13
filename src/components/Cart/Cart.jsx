import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart = (props) => {
  const cartItem = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Samsa', amount: 2, price: 12.99 }].map((el)=> 
      (<li key={el.id}>{el.name}</li>))}
      </ul>
  )
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33.51</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Open</button>
      </div>
    </Modal>
  );
};

export default Cart;
