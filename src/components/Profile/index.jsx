import React from 'react';

import MyPosts from '../MyPosts';

import styles from './style.module.scss';


const Profile = () => {
    return (
        <div className={styles['content']}>
            <div><img className={styles['content__background']} src="https://www.takefoto.ru/img/articles/big_za636k0a.jpg" /></div>
            <MyPosts/>
        </div>
    )

}

export default Profile;