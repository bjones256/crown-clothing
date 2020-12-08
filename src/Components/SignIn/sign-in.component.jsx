import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../FormInput/form-input.components';
import CustomButton from '../CustomButton/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { useHistory } from 'react-router-dom';

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
    const {emailSignInStart } = this.props;
    const {email, password } = this.state;
    
    emailSignInStart(email,password);

}

handleChange = (e) => {

    const {value,name} = e.target
    this.setState({ [name] : value })
}

    render(){
        const { googleSignInStart } = this.props;

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
                    <CustomButton onClick={googleSignInStart} isGoogleSignIn type='button'>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dipatch => ({
    googleSignInStart: () => dipatch(googleSignInStart()),
    emailSignInStart: ( email, password ) => dipatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);