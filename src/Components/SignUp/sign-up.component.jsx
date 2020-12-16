import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/form-input.components';
import CustomButton from '../CustomButton/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {

    const [ userCredentials, setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
// class SignUp extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             displayName:'',
//             email:'',
//             password:'',
//             confirmPassword:''

//         }
//     }

const {displayName,email,password,confirmPassword} = userCredentials;

const handleSubmit = async event => {
    event.preventDefault();
    // const { signUpStart } = this.props;
    // const {displayName,email,password,confirmPassword} = this.state;

    if(password != confirmPassword){
        alert("passwords don't match")
        return;
    }

    signUpStart({ displayName, email, password })
}

const handleChange = event => {
    const {name,value} = event.target
    setUserCredentials({...userCredentials, [name]:value})
}

    // render(){
        // const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className='sign-up'>
            <h2 className='title'> I do not have an account</h2>
            <span>Sign up with your email and password</span>
            {/* <form className='sign-up-form' onSubmit={this.handleSubmit}> */}
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                type='text'
                name='displayName'
                value={displayName}
                // onChange={this.handleChange}
                onChange={handleChange}
                label='Display Name'
                required
                />
                <FormInput 
                type='email'
                name='email'
                value={email}
                // onChange={this.handleChange}
                onChange={handleChange}
                label='Email'
                required
                />
                <FormInput 
                type='password'
                name='password'
                value={password}
                // onChange={this.handleChange}
                onChange={handleChange}
                label='Password'
                required
                />
                <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                // onChange={this.handleChange}
                onChange={handleChange}
                label='Confirm Password'
                required
                />
               <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
            </div>
        )
    }
// }

const mapDispatchToProps = dispatch =>({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);