import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import EmailSend from './EmailSend';

ReactDOM.render(
  <Router>
    <Switch>
        <Route
          exact
          path='/'
          render={()=>(
            <EmailSend />
          )}
        />
        <Route
          exact
          path='/*'
          render={()=>(
            <Redirect to={'/'} />
          )}
        />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
