import React from 'react';

import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

import styles from './style.module.scss';

const Profile = () => {
    return (
        <div>
        <ProfileInfo/>
        <MyPosts />
        </div>
        
    )
}

export default Profile;