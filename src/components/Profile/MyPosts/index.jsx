import React from 'react';

import Post from './Post';

import styles from './style.module.scss';

const MyPosts = () => {
    let posts = [
        { id: 1, message: 'Have you already log in in my app?', counter: 15 },
        { id: 2, message: 'Who is there?', counter: 16 },
        { id: 3, message: 'Roman', counter: 55 },
        { id: 4, message: 'United', counter: 16 },
    ];
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
