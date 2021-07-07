import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        {' '}
        HOME PAGE{' '}
      </Route>

      <Route exact path="/d">
        {' '}
        DEEP PAGE{' '}
      </Route>
      <Route>404 ERROR PAGE </Route>
    </Switch>
  );
}

export default App;
