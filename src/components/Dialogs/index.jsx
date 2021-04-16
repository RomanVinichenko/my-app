import React from 'react';
import styles from './style.module.scss';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = ({dialogs}, {messages}) => {

  debugger;
     let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

     let messagesElements = messages.map((m) => <Message message={m.message} />);

     return (
         <div className={styles['dialogs']}>
              <div className={styles['dialogsItems']}>{dialogsElements}</div>
              <div className={styles['messages']}>{messagesElements}</div>
         </div>
     );
};

export default Dialogs;
