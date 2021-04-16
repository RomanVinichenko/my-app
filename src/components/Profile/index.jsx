import React from 'react';

import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

import styles from './style.module.scss';

const Profile = ({posts}) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;
