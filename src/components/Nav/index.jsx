import React from 'react';

import styles from './style.module.scss';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={styles['nav']}>
            <div className={styles['item']}>
                <NavLink to="/profile" activeClassName={styles['active']}>Profile</NavLink>
            </div>
            <div className={styles['item']}>
                <NavLink to="/dialogs" activeClassName={styles['active']}>Messages</NavLink>
            </div>
            <div className={styles['item']}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={styles['item']}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={styles['item']}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}
export default Nav;
