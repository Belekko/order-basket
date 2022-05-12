import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Button</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='food'/>
      </div>
    </>
  );
};

export default Header;
