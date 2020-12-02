import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hu2jaHccHnEPYVh8bsCPw4spv0abxDWIHbHfY1aTBcMkK1UacbereIgyam99eE9S9E6StpQX7Hnn292plGyYOnh00AYYaZur0'

    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         />
    )
}

export default StripeCheckoutButton;