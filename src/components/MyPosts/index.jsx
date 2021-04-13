import React from 'react';

import Post from '../Post';

import styles from './style.module.scss';

const MyPosts = () => {
    return (
        <div className={styles['content']}>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={styles['posts']}>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;