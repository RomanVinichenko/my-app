import React from 'react';
import styles from './style.module.scss';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = () => {

     let dialogs = [
          {id: 1, name: 'Mad'},
          {id: 2, name: 'Olga'},
          {id: 3, name: 'Victor'},
          {id: 4, name: 'Jack'}
     ]

     let messages = [
          {id: 1, message: 'Justin had many items'},
          {id: 2, message: 'Oak won jack'},
          {id: 3, message: 'Hurts before'},
          {id: 4, message: 'Divine Razor'}
     ]

     let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);

     let messagesElements = messages.map( m => <Message message={m.message}/>);

     return (
          <div className={styles['dialogs']}>
               <div className={styles['dialogsItems']}>
                    {dialogsElements}
               </div>
               <div className={styles['messages']}>
                    {messagesElements}
               </div>
          </div>
     )
}

export default Dialogs;