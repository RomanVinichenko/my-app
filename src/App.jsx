import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import Settings from './components/Settings';

import './App.scss';

const App = ({posts, dialogs, messages}) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Nav />
                <div className="app-wrapper-content">
                    <Route path="/profile" render={ () => <Profile posts={posts} /> } />
                    <Route path="/dialogs" render={ () => <Dialogs dialogs={dialogs} messages={messages}/> } />
                    <Route path="/settings" render={ () => <Settings /> } />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
