import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from "./Application";
import * as serviceWorker from './serviceWorker';
import Store from "./config/Store.js";
import Modal from "react-modal"

const rootEl = document.getElementById("root");

const render = Component => {
  ReactDOM.render(<Component store={Store} />, rootEl);
};

Modal.setAppElement(rootEl);

render(Application);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
