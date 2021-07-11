import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Navs from './components/Navs';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Start from './pages/Bookmark';
import Show from './pages/Show';

// App.js -> theme for styled components
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
