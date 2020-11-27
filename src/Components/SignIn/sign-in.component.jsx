import { render } from '@testing-library/react'
import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../FormInput/form-input.components'
import CustomButton from '../CustomButton/custom-button.component'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import { useHistory } from 'react-router-dom'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }


handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password } = this.state;

    try{
        await auth.signInWithEmailAndPassword(email,password)

        this.setState({
            email:'',
            password:''
        })

    }catch(error){
        console.log(error)
    }


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
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn type='button'>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;