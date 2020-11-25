import { render } from '@testing-library/react'
import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../FormInput/form-input.components'
import CustomButton from '../CustomButton/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }


handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
        email:'',
        password:''
    })
}

handleChange = (e) => {

    const {value,name} = e.target
    this.setState({ [name] : value })
}

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type ='email' 
                    value={this.state.email} 
                    required 
                    label ='email'
                    handleChange={this.handleChange}
                    />
                    <FormInput 
                    
                    name='password' 
                    type ='password' 
                    value={this.state.password} 
                    required
                    label ='password'
                    handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                    <CustomButton type='submit' value="Submit Form">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;