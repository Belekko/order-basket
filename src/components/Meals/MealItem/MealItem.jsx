import classes from './MealItem.module.css';
import React, { useContext, } from 'react';
import MealItemForm from './MealItemForm';
import { CartContext } from '../../../store/cart-context';

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };


  const price = `$ ${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAmountAdd={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
