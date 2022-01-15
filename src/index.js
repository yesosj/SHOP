import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

//BrowserRouter 대신 HashRouter를 쓰면 서버에게 보내지 않고 리액트 스스로 라우팅 하는 개념이라 더 안전하게 가능.
//BrowserRouter는 서버에게 보낼 수도 있어서 보내면 이런 페이지 없는데요 라고 답변 올 수 있음.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
