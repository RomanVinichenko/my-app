import React from 'react';

import './App.scss'

import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
