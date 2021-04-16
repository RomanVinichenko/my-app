import React from 'react';

import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

import styles from './style.module.scss';


const Profile = ({state}) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={state.posts}/>
        </div>
    );
};

export default Profile;
