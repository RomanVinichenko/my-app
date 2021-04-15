import React from 'react';

import Post from '../Post';

import styles from './style.module.scss';

const MyPosts = () => {
    return (
        <div className={styles['postsBlock']}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div><textarea /></div>
                    <div><button>Add post</button></div>
                </div>
                <div className={styles['posts']}>
                    <Post message='Hi, how are you?' counter='15'/>
                    <Post message='It`s my first post' counter='20'/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;