import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Start from './pages/Start';

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          {' '}
          <Home />
        </Route>

        <Route exact path="/start">
          {' '}
          <Start />
        </Route>
        <Route>
          <div>
            <h1>404 ERROR PAGE, PAGE NOT FOUND</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
