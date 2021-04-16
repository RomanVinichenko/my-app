import React from 'react';

import Post from './Post';

import styles from './style.module.scss';

const MyPosts = ({posts}) => {


    let postsElements = posts.map((p) => <Post message={p.message} counter={p.counter} />);

    return (
        <div className={styles['postsBlock']}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea />
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={styles['posts']}>{postsElements}</div>
            </div>
        </div>
    );
};

export default MyPosts;
