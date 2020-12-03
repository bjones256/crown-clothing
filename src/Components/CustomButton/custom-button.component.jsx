import React from 'react'


import './custom-button.styles.scss'

//The styles didn't work out properly for me even when I copied the exact code from the repo. The google button and the display of the shop buttons didn't work properly. Not sure what the issue is but I get the concept and will perhaps come back and fix this.
// import { CustomButtonContainer } from './custom-button.styles'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;