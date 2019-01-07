import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import contacts from './data';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App contacts = {contacts} />, document.getElementById('root'));
registerServiceWorker();
