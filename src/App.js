import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './Components/Header/header.component';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import CheckoutPage from './Pages/Checkout/checkout.component';
import SignInAndUp from './Components/SignInAndUp/sign-in-and-up.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

// class App extends React.Component{
const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  },[checkUserSession])


  // below is an example of a cleanup function that fires on unmount. I don't think it actually doing anything here
  useEffect(() => {
    console.log('Im subscribing')
    const unsubscribeFromAuth = () => { console.log("Im' unsubscribed");}
    return () => {
      unsubscribeFromAuth()
    }
  },[])

// unsubscribeFromAuth = null;

  // componentDidMount(){
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  // }

  // componentWillUnmount(){
  //   this.unsubscribeFromAuth()
  // }

  // render(){
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        {/* <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndUp/>)}/> */}
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>):(<SignInAndUp/>)}/>
      </Switch>
    </div>
  );
  }
// }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
