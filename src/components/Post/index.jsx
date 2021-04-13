import React from 'react';

import styles from './style.module.scss';

const Post = () => {
    return (
        <div className={styles['item']}>
            <img className={styles['item__avatar']} src="https://static.wikia.nocookie.net/wolfhound/images/2/28/Luchezar.jpg/revision/latest/scale-to-width-down/340?cb=20130708110509&path-prefix=ru"/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;