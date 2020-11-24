import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './Pages/Homepage/homepage.component'

const HatsPage = () => (
  <div>Hats Page</div>
)

function App() {
  return (
    <div className="App">
<Switch>
  <Route exact path='/' component={HomePage}/>
  <Route path='/hats' component={HatsPage}/>
</Switch>
    </div>
  );
}

export default App;
