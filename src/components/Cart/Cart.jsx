import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItems from './CartItems';

const Cart = (props) => {
  const {totalAmount}= useContext(CartContext)

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <CartItems />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Open</button>
      </div>
    </Modal>
  );
};

export default Cart;
