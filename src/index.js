import React from 'react';
import ReactDOM from 'react-dom';
//all in js
// import './index.css';
import Todolist from './Todolist';//ES6的模块引用语法，从当前目录引用App，脚手架工具会自动补全js后缀，载入App.js
import App from './App';
// ReactDOM.render(<Todolist />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
