import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './layouts/App/App';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChartsPage } from './layouts/ChartsPage';
import { Login } from './layouts/Login';
import { ConfigPage } from './layouts/ConfigPage';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
      <Route path='/charts' component={ChartsPage} />
      <Route path='/config' component={ConfigPage} />
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
