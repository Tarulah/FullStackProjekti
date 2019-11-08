import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
<<<<<<< HEAD
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));
=======
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById('root'));
>>>>>>> fbd894f0efbeca56ef876295ab057c23d913a05b

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
