import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './Components/Header/header.component';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import CheckoutPage from './Pages/Checkout/checkout.component';
import SignInAndUp from './Components/SignInAndUp/sign-in-and-up.component';

// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component{

unsubscribeFromAuth = null;

  componentDidMount(){
    // const {setCurrentUser} = this.props

// this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

//   if(userAuth){
//     const userRef = await createUserProfileDocument(userAuth);

//     userRef.onSnapshot( snapshot => {
//       setCurrentUser ({
//           id: snapshot.id,
//           ...snapshot.data()
//         })
//     })
//   }
//   setCurrentUser(userAuth)

//     })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndUp/>)}/>
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(App);
