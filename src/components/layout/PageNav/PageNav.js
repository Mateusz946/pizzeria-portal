import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.scss';

const PageNav = () => (
    <div className={styles.component}>
        <nav>
            <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>HomePage</NavLink>
            <NavLink exact to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
            <NavLink exact to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink> 
            <NavLink exact to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</NavLink>
            <NavLink exact to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink> 
        </nav>
    </div>
 
);

export default PageNav;