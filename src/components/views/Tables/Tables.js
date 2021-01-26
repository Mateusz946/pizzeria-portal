import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';

const Tables = () => (
    <div className={styles.component}>
      <h2>Table view</h2>

      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        <Button variant='outlined' size='small' color='secondary'>New booking</Button>
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>
        <Button variant='outlined' size='small' color='secondary'>Booking</Button>
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>
        <Button variant='outlined' size='small' color='secondary'>New Event</Button>
      </Link>

      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>
        <Button variant='outlined' size='small' color='secondary'>Event</Button>
      </Link>
    </div>
);

export default Tables;