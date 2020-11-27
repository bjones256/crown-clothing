import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Header from './Components/Header/header.component'
import HomePage from './Pages/Homepage/homepage.component'
import ShopPage from './Pages/Shop/shop.component'
import SignInAndUp from './Components/SignInAndUp/sign-in-and-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
unsubscribeFromAuth = null;

  componentDidMount(){
this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

  if(userAuth){
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot( snapshot => {
      this.setState({
        currentUser: {
          id: snapshot.id,
          ...snapshot.data()
        }
      });
      console.log(this.state)
    })
  }
  this.setState({currentUser:userAuth})

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndUp}/>
      </Switch>
    </div>
  );
  }
}

export default App;
