import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';
import Button from '../../common/Button/Button';

const Tables = () => (
    <div className={styles.component}>
      <h2>Table view</h2>

      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        <Button> New Booking </Button>
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>
        <Button> Booking </Button>
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>
        <Button> New Event </Button>
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>
        <Button> Event </Button>
      </Link>
    </div>
);

export default Tables;