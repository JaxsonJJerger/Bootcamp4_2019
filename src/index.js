import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data/data';
import $ from 'jquery';
import Popper from 'popper.js';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

//The app is now passing the data as a property
ReactDOM.render(<App data={data} />, document.getElementById('root'));


