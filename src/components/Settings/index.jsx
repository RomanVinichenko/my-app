import React from 'react';

import Post from '../Post';

import styles from './style.module.scss';

const Settings = () => {
    return (
        <div className={styles['dialogs']}>
            <h1>Я тут был. лол кек чебурек</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                    <Post message='Gulid'/>
        </div>
    )
}

export default Settings;