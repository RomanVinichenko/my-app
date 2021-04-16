import React from 'react';

import styles from './style.module.scss';

const Post = ({ message, counter }) => {
    return (
        <div className={styles['item']}>
            <img
                className={styles['item__avatar']}
                src="https://www.mann-ivanov-ferber.ru/assets/images/authors/mark-avrelij/mark-avrelij.jpg"
                alt="#"
            />
            {message}
            <div>
                <span> Like </span>
                {counter}
            </div>
        </div>
    );
};

export default Post;
