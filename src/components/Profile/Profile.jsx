import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Post/MyPosts';



const Profile = () =>{
return <div className={s.content}>
<div><img src="https://www.takefoto.ru/img/articles/big_za636k0a.jpg"></img></div>

<MyPosts />
</div>

}

export default Profile;