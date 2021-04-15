import React from 'react';

import styles from './style.module.scss'

const ProfileInfo = () => {
    return (
        <div>
        <div><img src="https://www.takefoto.ru/img/articles/big_za636k0a.jpg" alt="#"/></div>
        <div className={styles['descriptionBlock']}>Av+description</div>
        </div>
    )
}

export default ProfileInfo;