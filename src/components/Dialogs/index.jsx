import React from 'react';

import styles from './style.module.scss';

const Dialogs = (props) => {
    return (
        <div className={styles ['dialogs']}>
            <div className="dialogs-items">
               <div className="dialog">
                  Maks
               </div>
               <div className="dialog">
                  Olja
               </div>
               <div className="dialog">
                  Ilya
               </div>
               <div className="dialog">
                  Ksu
               </div>
            </div>
            <div className="messages">
               <div>
                 <div className="message">React!</div>
                 <div className="message">Html?</div>
                 <div className="message">Css%</div>
               </div>
            </div>
        </div>
    )
}

export  default Dialogs;