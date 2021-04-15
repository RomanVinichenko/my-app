import React from 'react';
import styles from '../style.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
     let path = "/dialogs/" + id;
     return (
          <div className={`${styles['dialog']} ${styles['active']}`}>
               <NavLink to={path}>{name}</NavLink>
          </div>
     )
}

export default DialogItem;