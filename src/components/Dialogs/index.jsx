import React from 'react';

import styles from './style.module.scss';

import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    let path = "/dialogs/" + id;
    return (
        <div className={`${styles['dialog']} ${styles['active']}`}>
        <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message = ({message}) => {
    return (
       <div className={styles['message']}>{message}</div>
    )
    
}

const Dialogs = () => {
    return (
        <div className={styles['dialogs']}>
            <div className={styles['dialogsItems']}>
               <DialogItem name="Mad" id="1"/>
               <DialogItem name="Olga" id="2"/>
               <DialogItem name="Victor" id="3"/>
               <DialogItem name="Jack" id="4"/>
            </div>
            <div className={styles['messages']}>
               <div>
                 <Message message="React?"/>
                 <Message message="Html%"/>
                 <Message message="SCSS!"/>                 
               </div>
            </div>
        </div>
    )
}

export  default Dialogs;