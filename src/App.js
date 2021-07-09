import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Navs from './components/Navs';
import Home from './pages/Home';
import Start from './pages/Bookmark';
import Show from './pages/Show';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        {' '}
        <Home />
      </Route>

      <Route exact path="/bookmark">
        <Start />
      </Route>
      <Route exact path="/show/:id">
        <Show />
      </Route>
      <Route>
        <div>
          <h1>404 ERROR PAGE, PAGE NOT FOUND</h1>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
