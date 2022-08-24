import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import 'normalize.css'
import Approuter from './Approuter'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

