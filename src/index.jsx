import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.scss';

let posts = [
     { id: 1, message: 'Have you already log in in my app?', counter: 15 },
     { id: 2, message: 'Who is there?', counter: 16 },
     { id: 3, message: 'Roman', counter: 55 },
     { id: 4, message: 'United', counter: 16 },
];
let dialogs = [
     { id: 1, name: 'Mad' },
     { id: 2, name: 'Olga' },
     { id: 3, name: 'Victor' },
     { id: 4, name: 'Jack' },
];

let messages = [
     { id: 1, message: 'Justin had many items' },
     { id: 2, message: 'Oak won jack' },
     { id: 3, message: 'Hurts before' },
     { id: 4, message: 'Divine Razor' },
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));
