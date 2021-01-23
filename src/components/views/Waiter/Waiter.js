import React from 'react';
import styles from './Waiter.scss';
import {Link} from 'react-router-dom';
import Button from '../../common/Button/Button';

const Waiter = () => (
    <div className={styles.component}>
        <h2>Waiter view</h2>

        <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
            <Button> Order </Button>
        </Link>

        <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>
            <Button> New Order </Button>
        </Link>
  </div>
);

export default Waiter;