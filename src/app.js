import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/app.scss';

console.log('App is Running!!')

const appRoot = document.getElementById('app');


//export {IndecisionApp as default}
ReactDOM.render(<IndecisionApp options={[]}/>, appRoot);