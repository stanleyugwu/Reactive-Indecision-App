import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/app.scss';

console.log('App is Running!!')

const appRoot = document.getElementById('app');


ReactDOM.render(<IndecisionApp/>, appRoot);