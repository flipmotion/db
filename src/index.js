import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    overflow: hidden;
    /* -webkit-overflow-scrolling: touch; */
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
