import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Header from './Components/Header/header.component'
import HomePage from './Pages/Homepage/homepage.component'
import ShopPage from './Pages/Shop/shop.component'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
