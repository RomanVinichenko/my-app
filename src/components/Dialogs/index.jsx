import React from 'react';

import styles from './style.module.scss';

import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styles['dialogs']}>
            <div className={styles['dialogsItems']}>
               <div className={styles['dialog']}>
               <NavLink to="/dialogs/1">Maks</NavLink>
               </div>
               <div className={`${styles['dialog']} ${styles['active']}`}>
               <NavLink to="/dialogs/2">Olga</NavLink>
               </div>
               <div className={styles['dialog']}>
               <NavLink to="/dialogs/3">Ilya</NavLink>
               </div>
               <div className={styles['dialog']}>
               <NavLink to="/dialogs/4">Ksu</NavLink>
               </div>
            </div>
            <div className={styles['messages']}>
               <div>
                 <div className={styles['message']}>React!</div>
                 <div className={styles['message']}>Html?</div>
                 <div className={styles['message']}>Css%</div>
               </div>
            </div>
        </div>
    )
}

export  default Dialogs;