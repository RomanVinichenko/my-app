import React from 'react';

import Post from '../Post';

import styles from './style.module.scss';

const MyPosts = (props) => {

    return (
        <div className={styles['content']}>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
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