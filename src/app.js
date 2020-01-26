import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "../src/routers/AppRouter";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'bootstrap-scss/bootstrap.scss';





ReactDOM.render(<AppRouter />, document.getElementById('app'));
