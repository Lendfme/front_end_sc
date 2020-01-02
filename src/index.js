import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AppNoWeb3 from './AppNoWeb3';

import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

let root = document.getElementById('root');

if (window.web3 && typeof (window.web3) === 'object') {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, root);
} else {
    ReactDOM.render(<BrowserRouter><AppNoWeb3 /></BrowserRouter>, root);
}

// ReactDOM.render(<BrowserRouter><AppNoWeb3 /></BrowserRouter>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
