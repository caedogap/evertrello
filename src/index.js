import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusCircle);

ReactDOM.render(<App />, document.getElementById('root'));
