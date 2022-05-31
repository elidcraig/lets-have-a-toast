import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RandomToast from './pages/RandomToast'
// import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/recipes'>
        <Recipes />
      </Route>
      <Route exact path='/random'>
        <RandomToast />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
