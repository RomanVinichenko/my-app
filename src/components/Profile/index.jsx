import React from 'react';

import MyPosts from '../MyPosts';

import styles from './style.module.scss';

const Profile = () => {
    return (
        <div>
            <div><img src="https://www.takefoto.ru/img/articles/big_za636k0a.jpg" alt="#"/></div>
            <div>Av+descr</div>
            <MyPosts />
        </div>
    )
}

export default Profile;