import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
import { Howl } from 'howler';

import Hp from './Sounds/hp.mp3'

const play=new Howl({
  src:[Hp],
  volume:0.2,
  autoplay:true,
  loop:true
})
play.play();

ReactDOM.render(
  <Provider store={Store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

