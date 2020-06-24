import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AgetPost from './A_Pemanggilan_API_GET/A_getPosts';
import BgetPostsFakeAPI from './B_Fake_API/B_getPostsFakeAPI';

ReactDOM.render(
  <React.StrictMode>
    {/* <AgetPost /> */}
    <BgetPostsFakeAPI />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
