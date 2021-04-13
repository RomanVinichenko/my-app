import React from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';

import './App.scss'

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Profile />
        </div>
    )
}

export default App;
