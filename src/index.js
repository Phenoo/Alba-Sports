import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import 'normalize.css'
import Approuter from './Approuter'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

