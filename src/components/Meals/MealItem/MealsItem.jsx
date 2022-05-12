import classes from './MealItem.module.css';
import React from 'react';

const MealsItem = (props) => {
  const price= `$ ${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </li>
  );
};

export default MealsItem;
